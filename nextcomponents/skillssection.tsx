import React from 'react'
import Skills from './skills'

const SkillSection = () => {
  return (
    <section id="skills"
    className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden md:mt-40"
    style={{ transform: "scale(0.85)" }}
  >
    <h2 className='text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold3 via-gold1 to-gold2 typewriter-text gold-gradient-text mb-5'>Skills</h2>
    <Skills/>
    </section>
  )
}

export default SkillSection
