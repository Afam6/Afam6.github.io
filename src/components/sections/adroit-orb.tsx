'use client';

import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from '@react-three/drei';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  PointLight,
  Vector2,
} from 'three';

type ThemeProps = {
  isDark: boolean;
};

function AnimatedLights({ isDark }: ThemeProps) {
  const keyLightRef = useRef<PointLight>(null);
  const accentLightRef = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    const keyLight = keyLightRef.current;
    const accentLight = accentLightRef.current;

    if (!keyLight || !accentLight) {
      return;
    }

    const time = clock.elapsedTime;

    keyLight.position.set(
      Math.cos(time * 0.24) * 5,
      3 + Math.sin(time * 0.2) * 2,
      5,
    );

    accentLight.position.set(
      Math.sin(time * 0.18) * 4,
      -2,
      3 + Math.cos(time * 0.22) * 2,
    );
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.35 : 0.8} />

      <pointLight
        ref={keyLightRef}
        intensity={isDark ? 5 : 12}
        color={isDark ? '#8096ff' : '#ffffff'}
      />

      <pointLight
        ref={accentLightRef}
        intensity={isDark ? 2.5 : 5}
        color={isDark ? '#5be7c4' : '#b9ffe9'}
      />
    </>
  );
}

function TechnotronModel({ isDark }: ThemeProps) {
  const modelRef = useRef<Group>(null);
  const spinVelocityRef = useRef(new Vector2());
  const pointerSampleRef = useRef<{
    x: number;
    y: number;
    time: number;
  } | null>(null);

  const prefersReducedMotion = useReducedMotion();

  const { scene, animations } = useGLTF('/models/technotron.glb');

  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    const animation = actions.Animation;

    if (!animation) {
      return;
    }

    if (prefersReducedMotion) {
      animation.stop();
      return;
    }

    animation.reset().setEffectiveTimeScale(0.36).play();

    return () => {
      animation.stop();
    };
  }, [actions, prefersReducedMotion]);

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof Mesh)) {
        return;
      }

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      materials.forEach((material) => {
        if (!(material instanceof MeshStandardMaterial)) {
          return;
        }

        material.color.set(isDark ? '#405bb1' : '#7894dd');

        material.roughness = isDark ? 0.46 : 0.34;
        material.metalness = 0.02;
        material.envMapIntensity = isDark ? 0.5 : 0.9;
        material.opacity = isDark ? 0.42 : 0.48;
        material.transparent = true;
        material.needsUpdate = true;
      });
    });
  }, [isDark, scene]);

  useFrame(({ clock }, delta) => {
    const model = modelRef.current;

    if (!model || prefersReducedMotion) {
      return;
    }

    const velocity = spinVelocityRef.current;

    // The pointer-generated momentum.
    model.rotation.x += velocity.x * delta;
    model.rotation.y += velocity.y * delta;

    // Retain a subtle default rotation after the momentum fades.
    model.rotation.y += delta * 0.12;
    model.rotation.z += delta * 0.018;

    // Frame-rate-independent friction.
    const friction = Math.exp(-1.65 * delta);
    velocity.multiplyScalar(friction);

    if (velocity.lengthSq() < 0.000001) {
      velocity.set(0, 0);
    }

    const time = clock.elapsedTime;

    const idleScale = 1 + Math.sin(time * 0.35) * 0.012;

    model.scale.setScalar(idleScale);
    model.position.y = Math.sin(time * 0.4) * 0.025;
  });

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();

    pointerSampleRef.current = {
      x: event.nativeEvent.clientX,
      y: event.nativeEvent.clientY,
      time: event.nativeEvent.timeStamp,
    };
  };

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();

    const previous = pointerSampleRef.current;
    const nativeEvent = event.nativeEvent;

    if (!previous) {
      pointerSampleRef.current = {
        x: nativeEvent.clientX,
        y: nativeEvent.clientY,
        time: nativeEvent.timeStamp,
      };

      return;
    }

    const elapsedMilliseconds = Math.max(
      nativeEvent.timeStamp - previous.time,
      4,
    );

    const elapsedSeconds = elapsedMilliseconds / 1000;

    const pointerVelocityX =
      (nativeEvent.clientX - previous.x) / elapsedSeconds;

    const pointerVelocityY =
      (nativeEvent.clientY - previous.y) / elapsedSeconds;

    const angularVelocity = spinVelocityRef.current;
    const sensitivity = 0.00125;

    const targetX = MathUtils.clamp(pointerVelocityY * sensitivity, -3.2, 3.2);

    const targetY = MathUtils.clamp(pointerVelocityX * sensitivity, -3.2, 3.2);

    // Blend the new gesture with existing momentum.
    angularVelocity.x = MathUtils.lerp(angularVelocity.x, targetX, 0.68);

    angularVelocity.y = MathUtils.lerp(angularVelocity.y, targetY, 0.68);

    pointerSampleRef.current = {
      x: nativeEvent.clientX,
      y: nativeEvent.clientY,
      time: nativeEvent.timeStamp,
    };
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();

    // We discard pointer tracking but preserve angular
    // velocity, allowing the model to keep spinning.
    pointerSampleRef.current = null;
  };

  return (
    <group ref={modelRef} dispose={null}>
      <mesh
        onPointerOver={handlePointerOver}
        onPointerMove={handlePointerMove}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[1.3, 32, 32]} />

        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
          colorWrite={false}
        />
      </mesh>

      <primitive object={scene} />
    </group>
  );
}

export function AdroitOrb() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const [isDragging, setIsDragging] = useState(false);

  return (
    <div
      className={`relative my-0 h-[42vh] min-h-[340px] max-h-[460px] w-full max-w-[600px] touch-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      aria-label='Interactive animated Technotron'
      role='img'
    >
      <div className='pointer-events-none absolute inset-[16%] rounded-full bg-indigo-400/15 blur-3xl dark:bg-blue-600/10' />

      <Canvas
        camera={{
          position: [3, 3, 3],
          fov: 30,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <AnimatedLights isDark={isDark} />

        <Suspense fallback={null}>
          <TechnotronModel isDark={isDark} />
          <Environment preset='studio' />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.65}
          target={[0, 0, 0]}
          onStart={() => setIsDragging(true)}
          onEnd={() => setIsDragging(false)}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/technotron.glb');
