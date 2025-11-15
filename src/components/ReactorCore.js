import React, { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import { OrbitalLayer } from './OrbitalLayer';
import { ParticleSystem } from './ParticleSystem';
import { projects } from '../data/projects';
import { useLocation } from 'react-router-dom';

const ReactorScene = ({ initiated }) => {
  const core = useRef(), scene = useRef(), particle = useRef(),
        devops = useRef(), ai = useRef();

  useFrame(() => {
    core.current && (core.current.rotation.y += 0.005);
    particle.current && (particle.current.rotation.x += 0.002);
    devops.current && (devops.current.rotation.y += 0.01);
    ai.current && (ai.current.rotation.y -= 0.01);
  });

  useLayoutEffect(() => {
    if (initiated && scene.current) {
      gsap.fromTo(scene.current.scale,
        { x:.01, y:.01, z:.01 },
        { duration:2, x:1, y:1, z:1, ease:'power2.out' });
    }
  }, [initiated]);

  return (
    <group ref={scene} scale={initiated ? 1 : .01}>
      <ambientLight intensity={.3} />
      <pointLight position={[10,10,10]} color="#00ff88" />
      <mesh ref={core}>
        <sphereGeometry args={[1,32,32]} />
        <meshStandardMaterial color="#0088ff" emissive="#00ff88"
                              emissiveIntensity={.2} wireframe />
      </mesh>
      <group ref={particle}><ParticleSystem /></group>
      <group ref={devops}><OrbitalLayer type="devops" projects={projects.devops} radius={3} /></group>
      <group ref={ai}><OrbitalLayer type="ai" projects={projects.ai} radius={6} /></group>
      <Stars radius={100} depth={60} count={5000} factor={4} saturation={0} fade />
    </group>
  );
};

export const ReactorCanvas = ({ initiated, setInitiated }) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="canvas-container" style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }} gl={{ antialias: true }}>
        <ReactorScene initiated={initiated} />
      </Canvas>

      {isHome && (
        <button
          className={initiated ? 'init-button hidden' : 'init-button'}
          onClick={(e) => {
            e.stopPropagation();
            setInitiated(true);
          }}
          style={{ pointerEvents: 'all' }}
        >
          Initiate Fission
        </button>
      )}
    </div>
  );
};