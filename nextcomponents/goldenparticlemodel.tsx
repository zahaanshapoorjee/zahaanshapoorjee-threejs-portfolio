import React, { useMemo, useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

const Particles = () => {
  const gltf = useLoader(GLTFLoader, '/footballer2.glb');
  const texture = useLoader(THREE.TextureLoader, '/particle-texture.jpg');

  // Adjust particle count for optimization
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const particleSkip = isMobile ? 144 : 72; // Skip more vertices for mobile to reduce count

  const vertices = useMemo(() => {
    let points: number[] = [];
    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.geometry) {
        const geometry = child.geometry;
        geometry.computeVertexNormals();

        if (geometry.isBufferGeometry) {
          const positions = geometry.attributes.position.array;
          for (let i = 0; i < positions.length; i += particleSkip) {
            points.push(positions[i], positions[i + 1], positions[i + 2]);
          }
        }
      }
    });
    return new Float32Array(points);
  }, [gltf, particleSkip]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return geo;
  }, [vertices]);

  const [depthWrite, setDepthWrite] = useState(true);
  let lastToggleTime = 0;

  const particleRef = useRef<THREE.Points>(null);

  // Reduce update frequency to avoid excessive GPU load
  useFrame((state, delta) => {
    lastToggleTime += delta;
    if (lastToggleTime > 0.05) { // Toggle every 50ms
      setDepthWrite((prev) => !prev);
      lastToggleTime = 0;
    }
  });

  return (
    <points ref={particleRef} geometry={geometry}>
      <pointsMaterial
        map={texture}
        attach="material"
        color="#afafaf"
        size={isMobile ? 0.5 : 0.8} // Smaller size for mobile
        sizeAttenuation={true}
        transparent={true}
        blending={THREE.AdditiveBlending}
        // depthWrite={depthWrite}
      />
    </points>
  );
};

const GoldenParticleModel = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <ambientLight intensity={isMobile ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} color="#ffffff" intensity={isMobile ? 1 : 1.5} />
      <spotLight
        position={[-10, 15, 10]}
        angle={0.3}
        intensity={isMobile ? 1 : 1.5} 
      />
      <group position={isMobile ? [50, 20, -5] : [65, 25, -5]}>
        <Particles />
      </group>
    </>
  );
};

export default GoldenParticleModel;
