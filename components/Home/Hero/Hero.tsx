import { BaseInfo, contactData } from '@/Data/data'
import React from 'react'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    // pt - padding top, relative means the element is positioned relative to this div in contrast to absolute which is positioned relative to the viewport
    <div className='w-full pt-[4vh] md:pt-[12vh] bg-gradient-to-r from-black via-purple-500 to-grey-500 overflow-hidden relative'>
      <div className='mt-[6vh] flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          {/* name, position */}
          {/* needed to add a bit of margin top to avoid overlap with navbar on small screens */}
          {/* so set default margin top to 16 and then medium and higher screens margin top to 0 */}
          <div className='mt-16 md:mt-0'>
            {/* BaseInfo is stored in Data/data.ts */}
            <h1 data-aos='fade-left' className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>Hi, I&apos;m {BaseInfo.name}</h1>
            {/* .text-bg is defined in globals.css to create a linear gradient and be able to use here */}
            <h1 data-aos='fade-right' data-aos-delay='100' className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>{BaseInfo.position}</h1>
            
            {/* github */}
            <div className='flex mt-6 items-center space-x-8'>
              <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
                <FaGithub className='w-4 h-4 md:w-7 md:h-7 text-white'/>
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-bold text-white'>Github</h1>
                <Link href='https://github.com/nathanfenoglio' target='_blank'>
                  <p className='text-base md:text-lg text-white text-opacity-70'>github.com/nathanfenoglio</p>
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className='flex mt-6 items-center space-x-8'>
              <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
                <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white'/>
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-bold text-white'>Email</h1>
                <h1 className='text-base md:text-lg text-white text-opacity-70'>{contactData.email}</h1>
              </div>
            </div>

            {/* Linkedin */}
            <div className='flex mt-6 items-center space-x-8'>
              <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
                <FaLinkedin className='w-4 h-4 md:w-7 md:h-7 text-white'/>
              </div>
              <div>
                <h1 className='text-lg md:text-xl font-bold text-white'>LinkedIn</h1>
                <Link href='https://www.linkedin.com/in/nathan-fenoglio-b0a148a2' target='_blank'>
                  {/* <p className='text-base md:text-lg text-white text-opacity-70'>https://www.linkedin.com/in/nathan-fenoglio-b0a148a2</p> */}
                  <p className='text-base md:text-lg text-white text-opacity-70'>Nathan Fenoglio LinkedIn</p>
                </Link>
              </div>
            </div>

            {/* a tag to surround button and link to resume to download */}
            <div className='flex gap-4'>
              <a href='/files/Nathan_Fenoglio_Resume.pdf' download='Nathan_Fenoglio_Resume.pdf'>
                <button data-aos='zoom-in' data-aos-delay='300' className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
                bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2
                space-x-2 mt-8'>
                  <span>Download Resume</span>
                  <FaDownload />
                </button>
              </a>

              <a href='#contact'>
                <button data-aos='zoom-in' data-aos-delay='300' className='md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
                bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2
                space-x-2 mt-8'>
                  <span>Contact Me</span>
                </button>
              </a>
            </div>

          </div>
          {/* profile pic */}
          <div data-aos='zoom-in' data-aos-delay='400' className='mx-auto rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden'>
            <Image src={BaseInfo.profilePic} alt={BaseInfo.name} width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

