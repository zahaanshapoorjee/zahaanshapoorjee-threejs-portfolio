import React, { useMemo, useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

const Particles = () => {
    const gltf = useLoader(GLTFLoader, '/footballer2.glb');
    const texture = useLoader(THREE.TextureLoader, '/particle-texture.jpg'); 
    const vertices = useMemo(() => {
      let points = [];
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          const mesh = child;
          const geometry = mesh.geometry;
          geometry.computeVertexNormals();
  
          if (geometry.isBufferGeometry) {
            const positions = geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 36) { // Adjust as needed
              // Push each component of the vertex separately
              points.push(positions[i], positions[i + 1], positions[i + 2]);
            }
          }
        }
      });
      
      return new Float32Array(points);
    }, [gltf]);
  
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    const [depthWrite, setDepthWrite] = useState(true);
    let toggleTime = 0;

    
  
    // Particle animation
    const particleRef = useRef();
    useFrame((state, delta) => {
      toggleTime += delta;
      if (toggleTime > 0.008) { // Toggle every 2 seconds
        setDepthWrite(!depthWrite);
        toggleTime = 0;
      }
    });

    

    return (
      <points ref={particleRef}>
        <primitive rotation={[0, 0, 0]}  object={geometry} />
        <pointsMaterial 
          map={texture} 
          attach="material" 
          color="#afafaf" 
          size={0.8}  // Increased size
          sizeAttenuation={true} 
          transparent={true} 
          blending={THREE.AdditiveBlending}
          depthWrite={depthWrite} // Add depth write
          emissive="#ffffff" 
          emissiveIntensity={0.5} /> 
      </points>
    );
};

const GoldenParticleModel = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#ffffff" intensity={1.5} />
      <spotLight position={[-10, 15, 10]} angle={0.3} intensity={1.5} /> // Additional spotlight
      <group position={[65, 25, -5]}>
        <Particles />
      </group>
    </>
  );
};

export default GoldenParticleModel;
