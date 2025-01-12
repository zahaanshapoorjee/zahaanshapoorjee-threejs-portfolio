"use client";
import React, { useState, useRef, useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";

const StarBackground = (props: any) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const starCount = isMobile ? 1000 : 2000; 

  const sphere = useMemo(
    () => random.inSphere(new Float32Array(starCount), { radius: 1.2 }),
    [starCount]
  );

  const ref = useRef<any>();
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Space = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1.5] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default Space;
