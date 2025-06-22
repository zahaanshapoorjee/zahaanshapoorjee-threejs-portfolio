"use client";

import React, { useState, useEffect } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';
import Typewriter from 'typewriter-effect'; 
import Image from "next/image";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import GoldenParticleModel from './goldenparticlemodel';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';
import "./aboutme.css"
function AboutMe() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSkills = () => {
    smoothScroll('skills', 2000); 
  };

  const smoothScroll = (elementId: string, duration: number) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;
  
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
  
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };

  return (
    <div className="flex text-center flex-col md:flex-row mt-20 items-center justify-center px-0 md:px-20 md:pr-0 w-full z-[20] h-full">
      <div className='md:mb-20 md:h-full w-full flex flex-col gap-5 justify center m-auto mt-0 text-center md:text-start px-20'>
        <div className='Welcome-box py-[15px] px-[4px] border border-[#D4AF37] opacity-[0.9] align-center px-6'>
          <BoltIcon className='text-[#D4AF37] mr-[10px] h-5 w-5'/>
          <h1 className='text-white text-[13px]'>Athlete / Developer / Pianist</h1>
        </div>
        <div className='mt-20 md:flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
          <Typewriter 
            options={{
              strings: ['Zahaan', 'Footballer', 'Developer'], 
              autoStart: true,
              loop: true,
              deleteSpeed: 50,   
            }}
          />
        </div>
        <p className='text-lg md:text-lg text-white my-5 max-w-[600px]'>
          Hi! I'm Zahaan, a footballer, developer, and pianist. My interests include Cyber-Security, Piano, and Full-Stack Development.
        </p>
        <a onClick={scrollToSkills} className='py-2 border border-[#D4AF37] opacity-[0.9] text-center text-white cursor-pointer rounded-lg md:max-w-[200px]'>
          Check out my skills!
        </a>
      </div>
      <div className='w-full h-full mt-10 md:w-full h-full flex justify-center items-center rotate-180 aboutme '>
       {!isMobile && <div className="canvas-container">
          <Canvas id="aboutme" camera={{position: [-20, 0, -15]}}>
            <Suspense fallback={null}>
              <GoldenParticleModel />
              <OrbitControls />
            </Suspense>
          </Canvas></div>}
      </div>
    </div>
  );
}

export default AboutMe;
