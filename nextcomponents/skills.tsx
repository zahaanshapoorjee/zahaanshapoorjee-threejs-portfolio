"use client"

import React, { useEffect, useRef, useState, RefObject } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {

    const Skill_data = [
      {
        skill_name: "C++",
          Image: "/c.svg",
          width: 80,
          height: 80, 
      },
        {
          skill_name: "Html 5",
          Image: "/html.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "CSS",
          Image: "/css.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "JavaScript",
          Image: "/js.png",
          width: 65,
          height: 65,
        },
        {
          skill_name: "Tailwind Css",
          Image: "/tailwind.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "React",
          Image: "/react.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "Redux",
          Image: "/redux.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "TypeScript",
          Image: "/ts.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "Next js 13",
          Image: "/next.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "Framer Motion",
          Image: "/framer.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "Node js",
          Image: "/node-js.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "Mongo db",
          Image: "/mongodb.png",
          width: 40,
          height: 40,
        },
        {
          skill_name: "Express js",
          Image: "/express.png",
          width: 80,
          height: 80,
        },
        {
          skill_name: "Fire base",
          Image: "/Firebase.png",
          width: 55,
          height: 55,
        },
        {
          skill_name: "My SQL",
          Image: "/mysql.png",
          width: 70,
          height: 70,
        },
        {
          skill_name: "React Native",
          Image: "/ReactNative .png",
          width: 70,
          height: 70,
        },
      ];

      const itemVariants = {
        initial: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1 }
        }),
        hover: { scale: 1.5 }
      };
      

    const controls = Skill_data.map(() => useAnimation());
    const refs: RefObject<HTMLDivElement>[] = Skill_data.map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const dataIndex = entry.target.getAttribute('data-index');
          if (dataIndex !== null) {
            const numericIndex = parseInt(dataIndex, 10);
            if (entry.isIntersecting) {
              controls[numericIndex].start('visible');
            } else {
              controls[numericIndex].start('initial');
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
  
    refs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.setAttribute('data-index', index.toString());
        observer.observe(ref.current);
      }
    });
  
    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [controls, refs]);
  

  const imageVariants = {
    hover: { scale: 1.5 } // Adjust the scale value as needed
  };  

  return (
    <div className="grid grid-cols-4 gap-5 gap-y-10 mb-6 w-4/5 justify-center items-center rounded-3xl border-white pt-10 pb-10 border">
      {Skill_data.map((image, index) =>{
      // State to track hover
      const [isHovered, setIsHovered] = useState(false);

      // Inline styles for the image
      const imageStyle = isHovered ? {
        transform: 'scale(1.5)',
        transition: 'transform 0.3s ease',
        filter: 'brightness(1.2) saturate(1.5)',
        boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)'
      } : {
        transition: 'transform 0.3s ease'
      };
      
      return (
        <motion.div
          ref={refs[index]}
          key={index}
          data-index={index}
          className="flex flex-col justify-center items-center rounded overflow-hidden gap-y-2 relative"
          variants={itemVariants}
          initial="initial"
          animate={controls[index]}
          custom={index}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={imageStyle}
          >
            <Image
              src={image.Image}
              width={image.width-15}
              height={image.height-15}
              alt='skill image'
            />
          </div>
          <h1 className='text-transparent bg-clip-text gold-gradient-text font-bold'>
            {image.skill_name}
          </h1>
        </motion.div>
)})}

    </div>
  );
};

export default Skills;