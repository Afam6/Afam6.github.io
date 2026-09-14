'use client';

import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useReducedMotion } from 'motion/react';
import { useTheme } from 'next-themes';
import {
  Suspense,
  useEffect,
  useRef,
} from 'react';
import {
  Group,
  Mesh,
  MeshStandardMaterial,
  PointLight,
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
  const prefersReducedMotion = useReducedMotion();

  const { scene, animations } = useGLTF(
    '/models/technotron.glb',
  );

  const { actions } = useAnimations(
    animations,
    modelRef,
  );

  useEffect(() => {
    const animation = actions.Animation;

    if (!animation) {
      return;
    }

    if (prefersReducedMotion) {
      animation.stop();
      return;
    }

    animation
      .reset()
      .setEffectiveTimeScale(0.36)
      .play();

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

        material.color.set(
          isDark ? '#405bb1' : '#7894dd',
        );

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

    const time = clock.elapsedTime;

    // Slow whole-object rotation.
    model.rotation.y += delta * 0.12;

    // Gentle tilting makes the structure feel less mechanical.
    model.rotation.x = Math.sin(time * 0.22) * 0.08;
    model.rotation.z = Math.cos(time * 0.18) * 0.04;

    // Very restrained breathing and floating.
    const scale = 1 + Math.sin(time * 0.35) * 0.012;

    model.scale.setScalar(scale);
    model.position.y = Math.sin(time * 0.4) * 0.025;
  });

  return (
    <group ref={modelRef} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

export function AdroitOrb() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <div
      className='relative my-0 h-[42vh] min-h-[340px] max-h-[460px] w-full max-w-[600px] cursor-grab touch-none active:cursor-grabbing'
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
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/models/technotron.glb');