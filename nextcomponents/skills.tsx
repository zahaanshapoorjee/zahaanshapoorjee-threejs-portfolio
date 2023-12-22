"use client"
import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';

const CppModel = () => {
  const gltf = useLoader(GLTFLoader, '/cpp.glb');
  return <primitive object={gltf.scene} scale={1} />;
};

const JSModel = () => {
  const gltf = useLoader(GLTFLoader, '/js.glb');
  return <primitive object={gltf.scene} scale={22.5} />;
};

const PythonModel = () => {
  const gltf = useLoader(GLTFLoader, '/python.glb');
  return <primitive object={gltf.scene} scale={2} />;
};

const ReactModel = () =>{
  const gltf =  useLoader(GLTFLoader, '/react.glb');
  return <primitive object={gltf.scene} scale={1}/>
}

const MongoDBModel = () =>{
  const gltf =  useLoader(GLTFLoader, '/3dmongodb.glb');
  return <primitive object={gltf.scene} scale={1}/>
}

const SQLModel = () =>{
  const gltf =  useLoader(GLTFLoader, '/sql.glb');
  return <primitive object={gltf.scene} scale={1}/>
}

const PHPModel = () =>{
  const gltf =  useLoader(GLTFLoader, '/php.glb');
  return <primitive object={gltf.scene} scale={1}/>
}

const NodeJSModel = () =>{
  const gltf =  useLoader(GLTFLoader, '/nodejs.glb');
  return <primitive object={gltf.scene} scale={1}/>
}

const TailWindModel = () =>{
  const gltf =  useLoader(GLTFLoader, '/tailwind.glb');
  return <primitive object={gltf.scene} scale={1}/>
}


const CameraOrbit = () => {
  const { camera } = useThree();
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const radius = 5; // Radius of the camera's circular path
    camera.position.x = Math.sin(elapsed*1.25) * radius;
    camera.position.z = Math.cos(elapsed*1.25) * radius;
    camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene (or the object)
  });
  return null;
};

const Skills = () => {
  return (
    <div className="grid grid-cols-4 gap-5 gap-y-5 md:gap-y-10 mb-6 w-4/5 justify-center items-center rounded-3xl border-white pt-10 pb-10 border">
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <CppModel />
        </Canvas>
      </div>
      <div className='h-75 w-75 md:h-150 md:w-150 flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <JSModel />
        </Canvas>
      </div>
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <PythonModel />
        </Canvas>
      </div>
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={7.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <ReactModel />
        </Canvas>
      </div>
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [14, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={4.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <MongoDBModel />
        </Canvas>
      </div>
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={4.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <SQLModel />
        </Canvas>
      </div>
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={4.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <PHPModel />
        </Canvas>
      </div>
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={4.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <NodeJSModel />
        </Canvas>
      </div>
      <div className='h-half w-half md:h-full md:w-full flex flex-row items-center justify-center'>
        <Canvas camera={{ position: [4, 0, 0] }} style={{ width: 150, height: 150 }}>
          <ambientLight intensity={4.5} />
          <directionalLight position={[0, 0, 5]} />
          <CameraOrbit />
          <TailWindModel />
        </Canvas>
      </div>
    </div>
  );
};

export default Skills;
