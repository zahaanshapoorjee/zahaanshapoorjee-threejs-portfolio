"use client"
import { Socials } from "@/utilities";
import Image from "next/image";
import React from "react";

const Navbar = () => {

  
  const scrollToSkills = () => {
    smoothScroll('skills', 2000); // Scrolls over 1000 milliseconds (1 second)
  };

  const scrollToAboutMe = () => {
    smoothScroll('aboutme', 2000); // Scrolls over 1000 milliseconds (1 second)
  };
  
  const scrollToFootball = () => {
    smoothScroll('football', 2000); // Scrolls over 1000 milliseconds (1 second)
  };

  const scrollToProjects = () => {
    smoothScroll('projects', 2000); // Scrolls over 1000 milliseconds (1 second)
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
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#d4af37]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin invisible-items"
          />

          <span className="font-bold ml-[10px] hidden md:block gold-gradient-text"
           >
            Zahaan S
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-none bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-400">
            <a onClick={scrollToAboutMe} className="cursor-pointer">
              About me
            </a>
            <a onClick={scrollToFootball} className="cursor-pointer">
              Football
            </a>
            <a onClick={scrollToSkills} className="cursor-pointer">
              Skills
            </a>
            <a onClick={scrollToProjects} className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;