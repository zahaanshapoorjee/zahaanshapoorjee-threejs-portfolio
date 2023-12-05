"use client"

import React, { useEffect, useRef, useState, RefObject } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useLoader, useFrame, Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { Group } from 'three';

const Skills = () => {

  const CppModel = () => {
    const gltf = useLoader(GLTFLoader, '/cpp2.glb');
    const modelRef = useRef<Group>(null); // Explicitly type the ref as Group
  
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01;
        // Add other rotation lines if needed
      }
    });
  
    return (
      <primitive object={gltf.scene} scale={1} ref={modelRef} />
    );
  };

  return (
    <div className="grid grid-cols-4 gap-5 gap-y-10 mb-6 w-4/5 justify-center items-center rounded-3xl border-white pt-10 pb-10 border">
          <div className='h-full w-full flex flex-row items-center justify-center'>
        <Canvas camera={{position: [4, 0, 0]}} style={{width:150, height:150}}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 0, 5]} />
          <CppModel />
        </Canvas>
        </div>
    </div>
  );
};

export default Skills;