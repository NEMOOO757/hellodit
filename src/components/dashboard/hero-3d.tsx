'use client';

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';
import { useMediaQuery } from '@/hooks/use-media-query';

function HolographicCrystal() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    // Make the crystal react to mouse movement
    const { x, y } = state.pointer;
    
    // Smooth dampening for rotation
    easing.dampE(
      meshRef.current.rotation,
      [y * 0.5, x * 0.5 + state.clock.elapsedTime * 0.2, 0],
      0.15,
      delta
    );
    
    // Scale on hover
    easing.damp3(
      meshRef.current.scale,
      hovered ? [1.1, 1.1, 1.1] : [1, 1, 1],
      0.15,
      delta
    );
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <octahedronGeometry args={[1.5, 0]} />
        <MeshDistortMaterial
          color="#00F5A0"
          emissive="#00D2FF"
          emissiveIntensity={hovered ? 0.8 : 0.4}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.9}
          roughness={0.1}
          wireframe={true}
          distort={0.2}
          speed={2}
        />
      </mesh>
      
      {/* Inner solid core */}
      <mesh>
        <octahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#0B0F19"
          emissive="#00F5A0"
          emissiveIntensity={0.2}
          transmission={0.9}
          opacity={0.8}
          transparent
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 50;
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = new THREE.Object3D();
  
  // Create random positions
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -10 + Math.random() * 20;
      const yFactor = -10 + Math.random() * 20;
      const zFactor = -10 + Math.random() * 20;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#00D2FF" transparent opacity={0.5} />
    </instancedMesh>
  );
}

export default function Hero3D() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  if (isMobile) {
    return null; // Hide 3D on mobile for performance
  }

  return (
    <div className="w-full h-[280px] rounded-3xl overflow-hidden bg-gradient-to-r from-obsidian via-pitch-black to-obsidian border border-glass-border relative shadow-glow-cyan/20">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0" />
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-cyber-mint/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-holo-cyan/10 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Text Content Overlay */}
      <div className="absolute inset-0 z-10 p-10 flex flex-col justify-center pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-4">
          <span className="text-pure-white">Future of </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-mint to-holo-cyan text-glow-mint">
            Finance.
          </span>
        </h1>
        <p className="text-slate-gray max-w-md text-lg">
          Track your wealth across dimensions. Zero bugs. Absolute control.
        </p>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-y-0 right-0 w-1/2 z-10 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F5A0" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#00D2FF" />
          <Suspense fallback={null}>
            <HolographicCrystal />
            <Particles />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
