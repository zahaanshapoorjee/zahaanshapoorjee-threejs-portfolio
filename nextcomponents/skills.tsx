"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import Float from './Float';
import "./skills.css";

// ----- Model Components -----
const CppModel = () => {
  const gltf = useLoader(GLTFLoader, '/cpp.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={1} 
      // rotation={[0, 0, 0]}   // Uncomment and adjust if needed
    />
  );
};

const JSModel = () => {
  const gltf = useLoader(GLTFLoader, '/js.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={22.5} 
      rotation={[0, 25.125, 0]}
      />
  );
};

const PythonModel = () => {
  const gltf = useLoader(GLTFLoader, '/python.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={2} 
      rotation={[0, 1.55, 0]}
    />
  );
};

const MongoDBModel = () => {
  const gltf = useLoader(GLTFLoader, '/3dmongodb.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={4.1} 
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

const SQLModel = () => {
  const gltf = useLoader(GLTFLoader, '/sql.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={1} 
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};


const NodeJSModel = () => {
  const gltf = useLoader(GLTFLoader, '/nodejs.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={1.1} 
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

const AWSModel = () => {
  const gltf = useLoader(GLTFLoader, '/aws.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={1} 
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

const LinuxModel = () => {
  const gltf = useLoader(GLTFLoader, '/Linux.glb');
  return (
    <primitive 
      object={gltf.scene} 
      scale={1} 
      rotation={[0, Math.PI / 2, 0]}
    />
  );
};

// ----- Skills Component -----
const Skills = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className="desktop w-full md:grid md:grid-cols-4 md:gap-5 md:gap-y-5 md:gap-y-10 md:mb-10 sm:w-full justify-center items-center rounded-3xl md:border-white md:pt-20 md:pb-20 md:border p-5 pt-40">
        
        {/* C++ */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <CppModel />
            </Float>
          </Canvas>
        </div>

        {/* JavaScript */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <JSModel />
            </Float>
          </Canvas>
        </div>

        {/* Python */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <PythonModel />
            </Float>
          </Canvas>
        </div>

        {/* MongoDB */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [14, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <MongoDBModel />
            </Float>
          </Canvas>
        </div>

        {/* SQL */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <SQLModel />
            </Float>
          </Canvas>
        </div>


        {/* NodeJS */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <NodeJSModel />
            </Float>
          </Canvas>
        </div>

        {/* AWS */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <AWSModel />
            </Float>
          </Canvas>
        </div>

        {/* Linux */}
        <div className="h-0 w-0 md:h-full md:w-full flex flex-row items-center justify-center">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <LinuxModel />
            </Float>
          </Canvas>
        </div>
      </div>

      {/* MOBILE/TABLET */}
      <div className="tablet py-8 grid grid-cols-4 gap-5 gap-y-5 mb-6 w-full justify-center items-center rounded-3xl border-white px-5 border">
        
        {/* C++ */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <CppModel />
            </Float>
          </Canvas>
        </div>

        {/* JavaScript */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <JSModel />
            </Float>
          </Canvas>
        </div>

        {/* Python */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <PythonModel />
            </Float>
          </Canvas>
        </div>

        {/* MongoDB */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [14, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <MongoDBModel />
            </Float>
          </Canvas>
        </div>

        {/* SQL */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <SQLModel />
            </Float>
          </Canvas>
        </div>

        {/* NodeJS */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <NodeJSModel />
            </Float>
          </Canvas>
        </div>

        {/* AWS */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <AWSModel />
            </Float>
          </Canvas>
        </div>

        {/* Linux */}
        <div className="h-half w-half flex flex-row items-center justify-center md:w-0 md:h-0">
          <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 100, height: 100 }}>
            <ambientLight intensity={4.5} />
            <directionalLight position={[0, 0, 5]} />
            <Float>
              <LinuxModel />
            </Float>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Skills;
