"use client";

import React, { useEffect } from 'react';
import { BoltIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import GoldenParticleModel from './goldenparticlemodel';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';

function AboutMe() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  useEffect(() => {
    class TxtType {
      toRotate: string[];
      el: HTMLElement;
      loopNum: number;
      period: number;
      txt: string;
      isDeleting: boolean;
    
      constructor(el: HTMLElement, toRotate: string[], periodAttr: string | null) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(periodAttr ?? '2000', 10); 
        this.txt = '';
        this.isDeleting = false;
        this.tick();
      }
    
      tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    
        var that = this;
        var delta = this.isDeleting ? 50 : 200; 
    
        if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        } else if (!this.isDeleting && this.txt === fullTxt) {
          this.isDeleting = true;
          delta = this.period;
        }
    
        setTimeout(() => {
          that.tick();
        }, delta);
      }
    }
    
    var elements = document.getElementsByClassName('typewriter-text');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate && elements[i] instanceof HTMLElement) {
        new TxtType(elements[i] as HTMLElement, JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewriter-text > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
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
          <span className='text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold3 via-gold1 to-gold2 typewriter-text gold-gradient-text' data-type='["Zahaan", "Footballer", "Developer"]' data-period="3000"></span>
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
        </Canvas>
      </div>}
      </div>
    </div>
  );
}

export default AboutMe;
