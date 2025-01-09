import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Float = ({ children, floatSpeed = 2, floatHeight = 0.1 }) => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const elapsed = clock.getElapsedTime();
      // Make the object float up and down
      groupRef.current.position.y = Math.sin(elapsed * floatSpeed) * floatHeight;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default Float;
