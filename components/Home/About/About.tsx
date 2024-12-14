import SectionHeading from '@/components/Helper/SectionHeading'
import { aboutInfo, aboutInfoSkills } from '@/Data/data'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 text-white'>
      <SectionHeading>about me</SectionHeading>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20'>
        <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
          <h1 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>
            {aboutInfo.title}
          </h1>
          {/* about info description */}
          {/* text-base for medium sized screens is 16px */}
          <p data-aos='fade-left' data-aos-delay='200' className='mt-6 text-sm md:text-base text-white text-opacity-60'>{aboutInfo.description1}</p>
          <p data-aos='fade-left' data-aos-delay='200' className='mt-6 text-sm md:text-base text-white text-opacity-60'>{aboutInfo.description2}</p>
          <p data-aos='fade-left' data-aos-delay='200' className='mt-6 text-sm md:text-base text-white text-opacity-60'>{aboutInfo.description3}</p>

        </div>

        {/* skills with check mark icons */}
        <div data-aos='zoom-in' data-aos-anchor-placement='top-center' data-aos-delay='150' className='grid grid-cols-2 gap-4 md:gap-16 items-center lg:mx-auto lg:mt-28'>
          {aboutInfoSkills.map((oneSkill) => (
            <div key={oneSkill.id} className='mt-8'>
              <div className='flex items-center space-x-2 mb-6'>
              <div className={`w-7 h-7 ${oneSkill.color} flex flex-col items-center justify-center`}>
                  <FaCheck className='text-white'/> 
                </div>
                <p className='text-sm sm:text-base md:text-lg font-bold text-gray-300'>
                  {oneSkill.skill}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
