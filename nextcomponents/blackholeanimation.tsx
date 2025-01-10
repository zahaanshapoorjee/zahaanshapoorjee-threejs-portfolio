import React from 'react';
import './blackholeanimation.css';
import AboutMe from './aboutme';

function Blackholeanimation() {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video
  autoPlay
  preload='true'
  muted
  loop
  className='w-0 h-0 rotate-180 md:absolute md:top-[-380px] left-0 z-[1] md:w-full md:h-full object-cover filtered-video'
>
  <source src='/blackhole.webm' type='video/webm'></source>
</video>

      <AboutMe/>
    </div>
  );
}

export default Blackholeanimation;
