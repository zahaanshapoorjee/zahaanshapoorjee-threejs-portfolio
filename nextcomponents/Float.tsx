import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatProps {
  children: React.ReactNode
  floatSpeed?: number
  floatHeight?: number
}

const Float: React.FC<FloatProps> = ({
  children,
  floatSpeed = 2.5,
  floatHeight = 0.2,
}) => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const elapsed = clock.getElapsedTime()
      groupRef.current.position.y = Math.sin(elapsed * floatSpeed) * floatHeight
    }
  })

  return <group ref={groupRef}>{children}</group>
}

export default Float
