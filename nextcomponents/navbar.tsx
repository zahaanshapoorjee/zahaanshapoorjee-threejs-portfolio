"use client"
import { Socials } from "@/utilities";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // For controlling the mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Toggle for hamburger menu
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSkills = () => {
    smoothScroll("skills", 2000);
  };

  const scrollToAboutMe = () => {
    smoothScroll("aboutme", 2000);
  };

  const scrollToFootball = () => {
    smoothScroll("football", 2000);
  };

  const scrollToProjects = () => {
    smoothScroll("projects", 2000);
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
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="fixed top-0 z-50 w-full h-[65px] px-10 shadow-lg shadow-[#d4af37]/50 bg-[#03001417] backdrop-blur-md">
      <div className="flex items-center justify-between w-full h-full m-auto px-[10px]">
        {/* Logo and Name */}
        <a href="#aboutme" className="flex flex-row items-center">
          <Image
            src="/zahaanlogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="hidden ml-[10px] font-bold gold-gradient-text md:block">
            Zahaan Shapoorjee
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden w-[500px] h-full md:flex md:flex-row md:items-center md:justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto px-[20px] py-[10px] mr-[15px] font-bold text-white bg-[#0300145e] rounded-full gap-x-10">
            <a
              onClick={scrollToAboutMe}
              className="text-xs cursor-pointer animate-pulse md:md"
            >
              About me
            </a>
            <a
              onClick={scrollToFootball}
              className="text-xs cursor-pointer animate-pulse md:md"
            >
              Football
            </a>
            <a
              onClick={scrollToSkills}
              className="text-xs cursor-pointer animate-pulse md:md"
            >
              Skills
            </a>
            <a
              onClick={scrollToProjects}
              className="text-xs cursor-pointer animate-pulse md:md"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
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

        {/* Hamburger Menu (Mobile) */}
        <div className="z-50 flex items-center md:hidden">
          <button onClick={handleToggle} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Position absolute so it sits on top, adjust classes to your liking */}
      {isOpen && (
        <div className="flex flex-col items-center w-full py-5 text-white bg-[#030014ee] md:hidden">
          <a
            onClick={() => {
              scrollToAboutMe();
              handleToggle();
            }}
            className="p-2 hover:underline"
          >
            About me
          </a>
          <a
            onClick={() => {
              scrollToFootball();
              handleToggle();
            }}
            className="p-2 hover:underline"
          >
            Football
          </a>
          <a
            onClick={() => {
              scrollToSkills();
              handleToggle();
            }}
            className="p-2 hover:underline"
          >
            Skills
          </a>
          <a
            onClick={() => {
              scrollToProjects();
              handleToggle();
            }}
            className="p-2 hover:underline"
          >
            Projects
          </a>
          {/* Mobile Social Icons */}
          <div className="flex flex-row gap-5 mt-4">
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
      )}
    </div>
  );
};

export default Navbar;
