import React, { useRef } from 'react';
// import { gsap } from 'gsap';  // Remove: Unused
// import { projects } from '../data/projects';  // Remove: Unused (passed via props)

export const OrbitalLayer = ({ type, projects: layerProjects, radius }) => {
  const groupRef = useRef();

  const positions = layerProjects.map((_, i) => {
    const angle = (i / layerProjects.length) * Math.PI * 2;
    return [
      Math.cos(angle) * radius,
      Math.sin((i / layerProjects.length) * Math.PI) * 2,
      Math.sin(angle) * radius
    ];
  });

  const handlePodClick = (project) => {
    console.log('Entangled:', project.id, 'Metrics:', project.metrics);
    // Extend: Open modal or demo
  };

  if (layerProjects.length === 0) return null;

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh
          key={layerProjects[i]?.id || i}
          position={pos}
          onClick={() => handlePodClick(layerProjects[i])}
        >
          <cylinderGeometry args={[0.2, 0.2, 0.5]} />
          <meshStandardMaterial color={type === 'devops' ? '#00ff88' : '#ff0088'} emissive={type === 'devops' ? '#00ff88' : '#ff0088'} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
};