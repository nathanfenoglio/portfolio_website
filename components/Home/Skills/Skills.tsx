import SectionHeading from '@/components/Helper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      <SectionHeading>My Skills</SectionHeading>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center items-stretch'>
        {skillsData.map((skill) => {
          return (
            // shorten delay taking too long on scroll, just set all to 100 and remove data-aos-anchor-placement
            // <div data-aos='flip-left' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={skill.id}>
            <div data-aos='flip-left' data-aos-delay='100' key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
