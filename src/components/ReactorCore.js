import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';  // Add useFrame here
import { Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import { OrbitalLayer } from './OrbitalLayer';
import { ParticleSystem } from './ParticleSystem';
import { projects } from '../data/projects';

const ReactorScene = ({ initiated }) => {
  const coreRef = useRef();
  const sceneGroupRef = useRef();
  const particleRef = useRef();
  const devopsRef = useRef();
  const aiRef = useRef();

  useFrame((state) => {
    if (coreRef.current) coreRef.current.rotation.y += 0.005;
    if (particleRef.current) particleRef.current.rotation.x += 0.002;
    if (devopsRef.current) devopsRef.current.rotation.y += 0.01;
    if (aiRef.current) aiRef.current.rotation.y -= 0.01;
  });

  useLayoutEffect(() => {
    if (initiated && sceneGroupRef.current) {
      gsap.fromTo(sceneGroupRef.current.scale, 
        { x: 0.01, y: 0.01, z: 0.01 }, 
        { duration: 2, x: 1, y: 1, z: 1, ease: 'power2.out' }
      );
    }
  }, [initiated]);

  return (
    <group ref={sceneGroupRef} scale={initiated ? 1 : 0.01}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} color="#00ff88" />
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#0088ff"
          emissive="#00ff88"
          emissiveIntensity={0.2}
          wireframe
        />
      </mesh>
      <group ref={particleRef}>
        <ParticleSystem />
      </group>
      <group ref={devopsRef}>
        <OrbitalLayer type="devops" projects={projects.devops} radius={3} />
      </group>
      <group ref={aiRef}>
        <OrbitalLayer type="ai" projects={projects.ai} radius={6} />
      </group>
      <Stars radius={100} depth={60} count={5000} factor={4} saturation={0} fade />
    </group>
  );
};

export const ReactorCanvas = ({ initiated }) => (
  <div className="canvas-container">
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }} gl={{ antialias: true }}>
      <ReactorScene initiated={initiated} />
    </Canvas>
  </div>
);