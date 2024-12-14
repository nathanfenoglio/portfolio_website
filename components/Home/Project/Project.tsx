import SectionHeading from '@/components/Helper/SectionHeading'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      <SectionHeading>My Projects</SectionHeading>

      {/* projects broken up by category like Games, Mobile, Music, Web to be able to filter by category to display */}

      {/* Games */}
      <h1 data-aos='fade-left' data-aos-delay='100' className='flex justify-center text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-12'>Games</h1>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectData.filter(project => project.category === 'Games').map((project) => {
          return ( 
            <div key={project.id} className='relative w-full h-[300px] overflow-hidden rounded-lg'>
              {/* target='_blank' opens the link in a new tab, not necessarily wanting to do that */}
              {/* <Link href={project.url} target='_blank'> */}
              <Link href={project.url}>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg hover:scale-105 transition-all duration-300'/>
                <div className="absolute bottom-0 left-0 w-full text-white text-center py-12">
                  <p className="text-lg font-semibold text-orange-300 w-[80%] lg:w-[50%] mx-auto">
                    {project.title}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      {/* Mobile */}
      <h1 data-aos='fade-right' data-aos-delay='100' className='flex justify-center text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-12'>Mobile Apps</h1>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectData.filter(project => project.category === 'Mobile').map((project) => {
          return ( 
            <div key={project.id} className='relative w-full h-[300px] overflow-hidden rounded-lg'>
              <Link href={project.url}>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg hover:scale-105 transition-all duration-300'/>
                <div className="absolute bottom-0 left-0 w-full text-white text-center py-12">
                  <p className="text-lg font-semibold text-orange-300 w-[30%] mx-auto">
                    {project.title}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      {/* Music */}
      <h1 data-aos='fade-left' data-aos-delay='100' className='flex justify-center text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-12'>Music Apps</h1>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectData.filter(project => project.category === 'Music').map((project) => {
          return ( 
            <div key={project.id} className='relative w-full h-[300px] overflow-hidden rounded-lg'>
              <Link href={project.url}>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg hover:scale-105 transition-all duration-300'/>
                <div className="absolute bottom-0 left-0 w-full text-white text-center py-12">
                  <p className="text-lg font-semibold text-orange-300 w-[30%] mx-auto">
                    {project.title}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      {/* More Apps */}
      <h1 data-aos='fade-right' data-aos-delay='100' className='flex justify-center text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-12'>More Apps</h1>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {projectData.filter(project => project.category === 'Web').map((project) => {
          return ( 
            <div key={project.id} className='relative w-full h-[300px] overflow-hidden rounded-lg'>
              <Link href={project.url}>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg hover:scale-105 transition-all duration-300'/>
                <div className="absolute bottom-0 left-0 w-full text-white text-center py-12">
                  <p className="text-lg font-semibold text-orange-300 w-[30%] mx-auto">
                    {project.title}
                  </p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Project
