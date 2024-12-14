import SectionHeading from '@/components/Helper/SectionHeading'
import { musicProjectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MusicProjects = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      <SectionHeading>Music</SectionHeading>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
        {musicProjectData.map((project) => {
          return ( 
            <div key={project.id} className='relative w-full h-[300px] overflow-hidden rounded-lg'>
              {/* target='_blank' opens the link in a new tab, not necessarily wanting to do that */}
              {/* <Link href={project.url} target='_blank'> */}
              <Link href={project.url}>
                {/* transition-transform specifies to make the transition smooth and not instant */}
                <div className='relative w-full h-full hover:scale-105 transition-transform duration-300'>
                  <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
                  <div className="absolute bottom-0 left-0 w-full text-center py-2 lg:py-8">
                    <p className="text-lg font-semibold text-orange-300 w-[80%] lg:w-[50%] mx-auto">
                      {project.title}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MusicProjects
