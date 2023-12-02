"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { slideLeft, slideRight, slideTop } from '@/animations/anims';
import { BoltIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Canvas, useLoader, useThree, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import GoldenParticleModel from './goldenparticlemodel';
import { OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';


function AboutMe() {
  useEffect(() => {
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };


  

    TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    
      var that = this;
      var delta = this.isDeleting ? 50 : 200; // Adjust the values for smoother experience
    
      if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      } else if (!this.isDeleting && this.txt === fullTxt) {
        this.isDeleting = true;
        delta = this.period;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    var elements = document.getElementsByClassName('typewriter-text');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewriter-text > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  }, []);

const CameraLogger = () => {
  const { camera } = useThree();
  const speed = 0.025; // Very slow speed
  let time = 0;
  const amplitude = 0.0025; // Very minimal distance

  useFrame(() => {
    // Increment time slowly
    time += speed;

    // Oscillating motion on the y-axis and x-axis
    camera.position.y += amplitude * Math.sin(time);
    camera.position.x += amplitude * Math.cos(time);

    // Keep the camera facing the original direction
    camera.lookAt(new Vector3(0, 0, 0));
  });

  return null; // This component does not render anything
};

  
  

  // const scrollToSkills = () => {
  //   const skillsSection = document.getElementById('skills');
  //   if (skillsSection) {
  //     skillsSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToSkills = () => {
    smoothScroll('skills', 2000); // Scrolls over 1000 milliseconds (1 second)
  };
  

  const smoothScroll = (elementId, duration) => {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;
  
    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };
  
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-15 w-full z-[20] h-full"
    >
      <div className='h-full w-full flex flex-col gap-5 justify center m-auto text-start'>
        <motion.div id="" className='Welcome-box py-[15px] px-[4px] border border-[#D4AF37] opacity-[0.9] align-center px-6'
        variants={slideTop}>
          <BoltIcon className='text-[#D4AF37] mr-[10px] h-5 w-5'/>
          <h1 className='text-white text-[13px]'>Athlete / Developer / Pianist</h1>
        </motion.div>
        <div  className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-gold3 via-gold1 to-gold2 typewriter-text gold-gradient-text' data-type='["Zahaan Shapoorjee", "Footballer", "Developer"]' data-period="3000"></span>
        </div>
        <motion.p
        variants={slideLeft(0.8)} className='text-lg text-white my-5 max-w-[600px]'>
          Hi! I'm Zahaan, a footballer, developer, and pianist. My interests include Cyber-Security, Piano, and Full-Stack Development.
        </motion.p>
        <motion.a onClick={scrollToSkills} variants={slideLeft(1)} className='py-2 border border-[#D4AF37] opacity-[0.9]  text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
            Check out my skills!
        </motion.a>
      </div>
      {/* <motion.div variants={slideRight(0.8)} className='w-full h-full flex justify-center items-center'> */}
      {/* <Image
          className='iconsimage'
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        /> */}
        <div className='w-full h-full flex justify-center items-center rotate-180 aboutme'>
          <div style={{ width: '700px', height: '750px', position: 'relative' }}>
            <Canvas id="aboutme" camera={{position: [-20, 0, -15]}}>
              <Suspense fallback={null}>
                <GoldenParticleModel />
                <OrbitControls />
                <CameraLogger/>
              </Suspense>
            </Canvas>
          </div>
        </div>
        {/* </motion.div> */}
    </motion.div>
  )
}

export default AboutMe;
