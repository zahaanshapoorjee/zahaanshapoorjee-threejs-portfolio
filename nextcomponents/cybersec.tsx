"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideTop } from "@/animations/anims";
import Image from "next/image";
import "./cybersec.css"
const CyberSec = () => {
  return (
    <div className="desktop flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideTop}
          className="text-[40px] font-medium text-center bg-gradient-to-r from-gold3 via-gold1 to-gold2 typewriter-text gold-gradient-text"
        >
          Cyber Security Enthusiast
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto filtered-video2">
        <div className="filtered-video2 flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="filtered-video2 w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="filtered-video2 z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Web Exploitation is my Forte!</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          I love hacking things!
        </div>
      </div>

      <div className="filtered-video2 w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="true"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default CyberSec;