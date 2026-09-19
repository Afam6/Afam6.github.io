'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useRef } from 'react';
import {
  AdditiveBlending,
  Color,
  NormalBlending,
  ShaderMaterial,
  Vector2,
} from 'three';

const VERTEX_SHADER = /* glsl */ `
  attribute vec4 aSeed;

  uniform float uTime;
  uniform vec2 uCenter;
  uniform vec2 uResolution;
  uniform float uPixelRatio;
  uniform float uPointScale;

  varying float vScale;
  varying float vAngle;
  varying float vColorMix;
  varying float vOpacity;

  float hash(vec2 point) {
    return fract(
      sin(dot(point, vec2(127.1, 311.7))) * 43758.5453123
    );
  }

  mat2 rotate2d(float angle) {
    float sine = sin(angle);
    float cosine = cos(angle);

    return mat2(
      cosine, -sine,
      sine, cosine
    );
  }

  void main() {
    vec2 reference = position.xy;
    float aspect = uResolution.x / max(uResolution.y, 1.0);

    /*
     * Two spatial frequencies create a continuously flowing surface.
     * The points move whether or not the cursor is moving.
     */
    vec2 broadFlow = vec2(
      sin(reference.y * 5.4 + uTime * 0.62 + aSeed.x * 2.0),
      cos(reference.x * 4.8 - uTime * 0.54 + aSeed.y * 2.0)
    ) * 0.026;

    vec2 fineFlow = vec2(
      sin(
        (reference.x + reference.y) * 15.0 +
        uTime * 0.9 +
        aSeed.z * 4.0
      ),
      cos(
        (reference.x - reference.y) * 17.0 -
        uTime * 0.82 +
        aSeed.w * 4.0
      )
    ) * 0.006;

    vec2 flow = broadFlow + fineFlow;
    vec2 displaced = reference + flow;

    vec2 localPosition = vec2(
      (displaced.x - uCenter.x) * aspect,
      displaced.y - uCenter.y
    );

    /*
     * Slowly rotate the direction of the travelling wave so it never
     * settles into a permanent horizontal or vertical band.
     */
    float waveRotation =
      sin(uTime * 0.16) * 0.48 +
      cos(uTime * 0.09) * 0.16;

    vec2 wavePosition =
      rotate2d(waveRotation) * localPosition;

    /*
     * Distort the wave edge at multiple scales. This replaces the
     * geometrically perfect ring from the previous shader.
     */
    float edgeWarp =
      sin(wavePosition.y * 4.4 + uTime * 0.66) * 0.13 +
      sin(wavePosition.y * 10.5 - uTime * 0.44) * 0.045 +
      cos(wavePosition.y * 18.0 + uTime * 0.29) * 0.018;

    float sweepDistance =
      abs(wavePosition.x + edgeWarp);

    /*
    * Compressing these coordinates expands the visible field.
    * X is expanded more strongly, producing a wide flowing front.
    */
    vec2 spreadPosition = vec2(
      localPosition.x * 0.56,
      localPosition.y * 0.76
    );

    float distanceFromCenter = length(spreadPosition);

    float boundaryWarp =
      sin(
        localPosition.x * 4.0 +
        localPosition.y * 5.0 +
        uTime * 0.38
      ) * 0.075;

    float cloudDistance =
      distanceFromCenter + boundaryWarp * 0.72;

    /*
     * A large soft envelope localises the effect without revealing
     * particles uniformly across the whole page.
     */
    float envelope =
      1.0 -
      smoothstep(0.22, 1.58, cloudDistance);

    /*
     * This is a wide, irregular wave—not a circular outline.
     */
    float movingWave =
      1.0 -
      smoothstep(0.04, 0.92, sweepDistance);

    float liquidNoise =
      sin(reference.x * 7.0 + uTime * 0.43) *
      cos(reference.y * 6.2 - uTime * 0.37);

    liquidNoise =
      liquidNoise * 0.5 + 0.5;

    float body =
      envelope *
      mix(0.08, 0.46, liquidNoise);

    float crest =
      movingWave *
      envelope *
      0.42;

    /*
     * A few particles remain around the body of the wave, but none
     * should form a page-wide static star field.
     */
    float mistNoise = hash(
      floor(reference * 150.0) +
      floor(uTime * 0.16)
    );

    float mist =
      smoothstep(0.88, 0.995, mistNoise) *
      (
        1.0 -
        smoothstep(0.9, 1.9, cloudDistance)
      ) *
      0.24;

    float pulse =
      0.9 +
      sin(uTime * 1.05 + aSeed.w * 6.2831) * 0.1;

    float scale =
      (body + crest + mist) * pulse;

    scale = clamp(scale, 0.0, 1.3);

    vScale = scale;

    /*
     * Dashes align loosely with the local flow instead of pointing
     * around a circle.
     */
    vAngle =
      atan(
        flow.y + cos(uTime * 0.31) * 0.018,
        flow.x + sin(uTime * 0.27) * 0.018
      ) +
      sin(uTime * 0.5 + aSeed.x * 6.2831) * 0.22;

    vColorMix =
      0.5 +
      0.5 *
      sin(
        reference.x * 6.7 +
        reference.y * 8.3 +
        uTime * 0.24 +
        aSeed.y * 6.2831
      );

    vOpacity =
      smoothstep(0.025, 0.22, scale) *
      mix(0.32, 0.82, min(scale, 1.0));

    gl_Position = vec4(displaced, 0.0, 1.0);

    gl_PointSize = max(
      1.0,
      scale *
      5.8 *
      uPixelRatio *
      uPointScale *
      mix(0.72, 1.2, aSeed.z)
    );
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;

  varying float vScale;
  varying float vAngle;
  varying float vColorMix;
  varying float vOpacity;

  float roundedBox(
    vec2 point,
    vec2 bounds,
    float radius
  ) {
    vec2 distanceField = abs(point) - bounds + radius;

    return
      min(max(distanceField.x, distanceField.y), 0.0) +
      length(max(distanceField, 0.0)) -
      radius;
  }

  void main() {
    vec2 point = gl_PointCoord - vec2(0.5);

    float sine = sin(vAngle);
    float cosine = cos(vAngle);

    point = mat2(
      cosine, -sine,
      sine, cosine
    ) * point;

    float distanceField = roundedBox(
      point,
      vec2(0.34, 0.105),
      0.095
    );

    float shape = 1.0 - smoothstep(0.0, 0.055, distanceField);
    float alpha = shape * vOpacity;

    if (alpha < 0.015 || vScale < 0.035) {
      discard;
    }

    float split = 0.58;

    vec3 color = mix(
      mix(
        uColor1,
        uColor2,
        min(vColorMix / split, 1.0)
      ),
      mix(
        uColor2,
        uColor3,
        max((vColorMix - split) / (1.0 - split), 0.0)
      ),
      step(split, vColorMix)
    );

    gl_FragColor = vec4(color, alpha);
  }
`;

function createParticleData(columns: number, rows: number) {
  const particleCount = columns * rows;
  const positions = new Float32Array(particleCount * 3);
  const seeds = new Float32Array(particleCount * 4);

  let randomState = 0x2f6e2b1;

  const random = () => {
    randomState = (Math.imul(randomState, 1664525) + 1013904223) >>> 0;

    return randomState / 4294967296;
  };

  let particleIndex = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const positionIndex = particleIndex * 3;
      const seedIndex = particleIndex * 4;

      const jitterX = (random() - 0.5) * 0.78;
      const jitterY = (random() - 0.5) * 0.78;

      positions[positionIndex] =
        -1.08 + ((column + 0.5 + jitterX) / columns) * 2.16;

      positions[positionIndex + 1] =
        -1.08 + ((row + 0.5 + jitterY) / rows) * 2.16;

      positions[positionIndex + 2] = 0;

      seeds[seedIndex] = random();
      seeds[seedIndex + 1] = random();
      seeds[seedIndex + 2] = random();
      seeds[seedIndex + 3] = random();

      particleIndex += 1;
    }
  }

  return { positions, seeds };
}

const PARTICLE_DATA = createParticleData(88, 56);

type ParticleFieldProps = {
  isDark: boolean;
  reducedMotion: boolean;
};

function ParticleField({ isDark, reducedMotion }: ParticleFieldProps) {
  const materialRef = useRef<ShaderMaterial>(null);
  const pointerRef = useRef({
    x: 0,
    y: 0.12,
    inside: false,
  });

  const centerRef = useRef(new Vector2(0, 0.12));
  const targetRef = useRef(new Vector2(0, 0.12));
  const elapsedRef = useRef(0);

  const { gl, size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uCenter: { value: new Vector2(0, 0.12) },
      uResolution: { value: new Vector2(1, 1) },
      uPixelRatio: { value: 1 },
      uPointScale: { value: 1 },
      uColor1: { value: new Color('#4969d4') },
      uColor2: { value: new Color('#765fc2') },
      uColor3: { value: new Color('#e77a65') },
    }),
    [],
  );

  useEffect(() => {
    const canvas = gl.domElement;

    const updatePointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();

      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      pointerRef.current.inside = inside;

      if (!inside) {
        return;
      }

      pointerRef.current.x =
        ((event.clientX - bounds.left) / bounds.width) * 2 - 1;

      pointerRef.current.y =
        1 - ((event.clientY - bounds.top) / bounds.height) * 2;
    };

    const leaveWindow = () => {
      pointerRef.current.inside = false;
    };

    window.addEventListener('pointermove', updatePointer, {
      passive: true,
    });

    window.addEventListener('blur', leaveWindow);
    document.documentElement.addEventListener('pointerleave', leaveWindow);

    return () => {
      window.removeEventListener('pointermove', updatePointer);
      window.removeEventListener('blur', leaveWindow);
      document.documentElement.removeEventListener('pointerleave', leaveWindow);
    };
  }, [gl]);

  useEffect(() => {
    const material = materialRef.current;

    if (!material) {
      return;
    }

    const palette = isDark
      ? ['#91a4ff', '#55dfc2', '#ba9cff']
      : ['#2c64ed', '#f84242', '#ffb800'];

    material.uniforms.uColor1.value.set(palette[0]);
    material.uniforms.uColor2.value.set(palette[1]);
    material.uniforms.uColor3.value.set(palette[2]);

    material.needsUpdate = true;
  }, [isDark]);

  useFrame((_, delta) => {
    const material = materialRef.current;

    if (!material) {
      return;
    }

    const safeDelta = Math.min(delta, 0.05);

    if (!reducedMotion) {
      elapsedRef.current += safeDelta;
    }

    const time = elapsedRef.current;
    const pointer = pointerRef.current;

    const idleX =
      Math.sin(time * 0.31) * 0.32 + Math.sin(time * 0.71 + 1.4) * 0.1;

    const idleY =
      Math.cos(time * 0.27 + 0.6) * 0.2 + Math.sin(time * 0.63) * 0.075;

    if (pointer.inside && !reducedMotion) {
      targetRef.current.set(pointer.x + idleX * 0.08, pointer.y + idleY * 0.08);
    } else {
      targetRef.current.set(idleX, idleY + 0.08);
    }

    const followSpeed = pointer.inside ? 2.8 : 0.7;

    const interpolation = reducedMotion
      ? 1
      : 1 - Math.exp(-followSpeed * safeDelta);

    centerRef.current.lerp(targetRef.current, interpolation);

    const pixelRatio = Math.min(window.devicePixelRatio, 1.75);
    const pointScale = Math.min(Math.max(size.width / 1440, 0.72), 1.12);

    material.uniforms.uTime.value = time;
    material.uniforms.uCenter.value.copy(centerRef.current);
    material.uniforms.uResolution.value.set(size.width, size.height);
    material.uniforms.uPixelRatio.value = pixelRatio;
    material.uniforms.uPointScale.value = pointScale;
  });

  return (
    <points frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          args={[PARTICLE_DATA.positions, 3]}
        />

        <bufferAttribute
          attach='attributes-aSeed'
          args={[PARTICLE_DATA.seeds, 4]}
        />
      </bufferGeometry>

      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        transparent
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
        blending={isDark ? AdditiveBlending : NormalBlending}
      />
    </points>
  );
}

export function CursorParticles() {
  const { resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className='pointer-events-none absolute inset-0 overflow-hidden'
      aria-hidden='true'
    >
      <Canvas
        dpr={[1, 1.75]}
        frameloop={prefersReducedMotion ? 'demand' : 'always'}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: 'high-performance',
        }}
      >
        <ParticleField
          isDark={resolvedTheme === 'dark'}
          reducedMotion={Boolean(prefersReducedMotion)}
        />
      </Canvas>
    </div>
  );
}
