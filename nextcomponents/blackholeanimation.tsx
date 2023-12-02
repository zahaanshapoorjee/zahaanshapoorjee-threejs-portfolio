import React from 'react';
import './blackholeanimation.css';
import AboutMe from './aboutme';

function Blackholeanimation() {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video
        autoPlay
        muted
        loop
        className='hidden md:block rotate-180 absolute top-[-380px] left-0 z-[1] w-full h-full object-cover filtered-video'
      >
        <source src='/blackhole.webm' type='video/webm'></source>
      </video>
      <AboutMe/>
    </div>
  );
}

export default Blackholeanimation;
