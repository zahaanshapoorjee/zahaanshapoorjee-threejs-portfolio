import React from 'react'
import Skills from './skills'

const SkillSection = () => {
  return (
    <section id="skills"
    className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden md:mt-40"
    style={{ transform: "scale(0.85)" }}
  >
    <h2 className='text-transparent bg-clip-text gold-gradient-text mb-2 text-6xl skilltext'>Skills</h2>
    <Skills/>
    </section>
  )
}

export default SkillSection
