import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 mx-10"
      id="projects"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold3 via-gold1 to-gold2 typewriter-text gold-gradient-text pb-5">
        My Work
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 w-full px-10">
      <ProjectCard
          src="/playfanup.png"
          title="PlayFanup"
          description="A platform for intra and inter college tournament registration with features like fantasy games, leader-boards, player stats, brochure, and a tournament dashboard."
        />
        <ProjectCard
          src="/presentperfect.png"
          title="Present Perfect"
          description="Responsible gifting ideas for both corporate and personal needs. Our solutions are creative, sustainable and customisable to suit your needs"
        />
        <ProjectCard
          src="/niparo.png"
          title="Niparo Trading"
          description="Comprehensive Facility Management Solutions for a streamlined experience. We exist to empower you to focus on what truly matters – your core business."
        />
        <ProjectCard
          src="/soundcheck.jpeg"
          title="SoundCheck India"
          description="SoundCheck is the go-to destination for all things Indian Music, whether you are a client looking for the next big artist or the freshest new sounds to cater to your needs, or you yourself are the next big artist producing the freshest new sounds, SoundCheck is present every step of the way."
        />
        <ProjectCard
          src="/mxv.png"
          title="MXV Consulting"
          description="We are a dynamic management consulting firm based in India with a global presence. Our fresh approach and customised solutions have allowed us to successfully complete over 300 projects across various sectors."
        />
        <ProjectCard
          src="/cherrypeachplum.png"
          title="Cherry Peach Plum"
          description="Marketing Solutions to Deliver Business Growth"
        />
      </div>
    </div>
  );
};

export default Projects;