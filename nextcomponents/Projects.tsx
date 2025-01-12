"use client"
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const LazyProjectCard = ({ src, title, description, link }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {isVisible && (
        <ProjectCard
          src={src}
          title={title}
          description={description}
          link={link}
        />
      )}
    </div>
  );
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    checkMobile(); 
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center py-5 md:py-20 mx-10"
      id="projects"
    >
      <h2 className="text-4xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold3 via-gold1 to-gold2 typewriter-text gold-gradient-text pb-5">
        My Work
      </h2>
      
      {isMobile && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full md:px-10">
      <LazyProjectCard
          src="/playfanup.png"
          title="PlayFanup"
          description="A platform for intra and inter college tournament registration with features like fantasy games, leader-boards, player stats, brochure, and a tournament dashboard."
          link="https://playfanup.in"
      />
        <LazyProjectCard
          src="/keylogger.jpeg"
          title="Keylogger"
          description="A persistent keylogger Written in C++, Visual Basic and BATCH. It logs the keystrokes as well as information of the user and sends it to the attacker."
          link="https://github.com/zahaanshapoorjee/Zahaan-s-Keylogger-3.0"
        />
        <LazyProjectCard
          src="/packetsniffer.png"
          title="Packet Sniffer"
          link="https://github.com/zahaanshapoorjee/Network-Packet-Sniffer"
          description="A Network Packet Sniffer developed in Python 3. Allows you to monitor traffic running through local network. Allows the user to be able to view Source of the packets, Target host and the protocol type used."
        />
        <LazyProjectCard
          src="/rat.webp"
          title="Remote Access Trojan"
          description="Remote Access Trojan Virus written in C++ and botnet written in python."
          link="https://github.com/zahaanshapoorjee/The-RAT-Remote-Access-Trojan"
        />
        <LazyProjectCard
          src="/presentperfect.png"
          title="Present Perfect"
          link="https://present-perfect.in"
          description="Responsible gifting ideas for both corporate and personal needs. Our solutions are creative, sustainable and customisable to suit your needs"
        />
        <LazyProjectCard
          src="/niparo.png"
          title="Niparo Trading"
          link="https://niparo.co.in"
          description="Comprehensive Facility Management Solutions for a streamlined experience. We exist to empower you to focus on what truly matters – your core business."
        />
        <LazyProjectCard
          src="/soundcheck.jpeg"
          title="SoundCheck India"
          link="https://github.com/pyjamaproggers/soundcheck-frontend"
          description="SoundCheck is the go-to destination for all things Indian Music, whether you are a client looking for the next big artist or the freshest new sounds to cater to your needs, or you yourself are the next big artist producing the freshest new sounds, SoundCheck is present every step of the way."
        />
        <LazyProjectCard
          src="/mxv.png"
          title="MXV Consulting"
          link="https://mxv.in"
          description="We are a dynamic management consulting firm based in India with a global presence. Our fresh approach and customised solutions have allowed us to successfully complete over 300 projects across various sectors."
        />

        <LazyProjectCard
          src="/cherrypeachplum.png"
          title="Cherry Peach Plum"
          link="https://cherrypeachplum.in"
          description="Marketing Solutions to Deliver Business Growth"
        />
        <LazyProjectCard
          src="/apl.png"
          title="Ashoka Premier League"
          link="https://ashokapl.in"
          description="Ashoka University's trademark intra-college football tournament."
        />
        <LazyProjectCard
          src="/aba.png"
          title="Ashoka Basketball Association"
          link="https://ashokaba.in"
          description="Ashoka University's trademark intra-college basketball tournament."
        />
        <LazyProjectCard
          src="/ashokadatasociety.png"
          title="Ashoka Data Society"
          link="https://ashokadatasociety.netlify.app"
          description="The Ashoka Data Society (ADS) is an academic society at Ashoka University that focuses on data. ADS offers courses and programs to help students develop their data skills and knowledge."
        />
      </div>}

      {!isMobile && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full md:px-10">
      <ProjectCard
          src="/playfanup.png"
          title="PlayFanup"
          description="A platform for intra and inter college tournament registration with features like fantasy games, leader-boards, player stats, brochure, and a tournament dashboard."
          link="https://playfanup.in"
      />
        <ProjectCard
          src="/keylogger.jpeg"
          title="Keylogger"
          description="A persistent keylogger Written in C++, Visual Basic and BATCH. It logs the keystrokes as well as information of the user and sends it to the attacker."
          link="https://github.com/zahaanshapoorjee/Zahaan-s-Keylogger-3.0"
        />
        <ProjectCard
          src="/packetsniffer.png"
          title="Packet Sniffer"
          link="https://github.com/zahaanshapoorjee/Network-Packet-Sniffer"
          description="A Network Packet Sniffer developed in Python 3. Allows you to monitor traffic running through local network. Allows the user to be able to view Source of the packets, Target host and the protocol type used."
        />
        <ProjectCard
          src="/rat.webp"
          title="Remote Access Trojan"
          description="Remote Access Trojan Virus written in C++ and botnet written in python."
          link="https://github.com/zahaanshapoorjee/The-RAT-Remote-Access-Trojan"
        />
        <ProjectCard
          src="/presentperfect.png"
          title="Present Perfect"
          link="https://present-perfect.in"
          description="Responsible gifting ideas for both corporate and personal needs. Our solutions are creative, sustainable and customisable to suit your needs"
        />
        <ProjectCard
          src="/niparo.png"
          title="Niparo Trading"
          link="https://niparo.co.in"
          description="Comprehensive Facility Management Solutions for a streamlined experience. We exist to empower you to focus on what truly matters – your core business."
        />
        <ProjectCard
          src="/soundcheck.jpeg"
          title="SoundCheck India"
          link="https://github.com/pyjamaproggers/soundcheck-frontend"
          description="SoundCheck is the go-to destination for all things Indian Music, whether you are a client looking for the next big artist or the freshest new sounds to cater to your needs, or you yourself are the next big artist producing the freshest new sounds, SoundCheck is present every step of the way."
        />
        <ProjectCard
          src="/mxv.png"
          title="MXV Consulting"
          link="https://mxv.in"
          description="We are a dynamic management consulting firm based in India with a global presence. Our fresh approach and customised solutions have allowed us to successfully complete over 300 projects across various sectors."
        />

        <ProjectCard
          src="/cherrypeachplum.png"
          title="Cherry Peach Plum"
          link="https://cherrypeachplum.in"
          description="Marketing Solutions to Deliver Business Growth"
        />
        <ProjectCard
          src="/apl.png"
          title="Ashoka Premier League"
          link="https://ashokapl.in"
          description="Ashoka University's trademark intra-college football tournament."
        />
        <ProjectCard
          src="/aba.png"
          title="Ashoka Basketball Association"
          link="https://ashokaba.in"
          description="Ashoka University's trademark intra-college basketball tournament."
        />
        <ProjectCard
          src="/ashokadatasociety.png"
          title="Ashoka Data Society"
          link="https://ashokadatasociety.netlify.app"
          description="The Ashoka Data Society (ADS) is an academic society at Ashoka University that focuses on data. ADS offers courses and programs to help students develop their data skills and knowledge."
        />
      </div>}
    </div>
  );
};

export default Projects;