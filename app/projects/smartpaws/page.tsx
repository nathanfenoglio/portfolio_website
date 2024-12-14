import { smartpawsImages } from '@/Data/projects'
import Image from 'next/image'
import React from 'react'

const SmartPaws = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>SmartPaws Virtual Veterinarian</h1>
      </div>

      {/* app description */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[75%] mt-6 mx-auto font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem]'>
        <p className='text-left lg:text-center text-lg md:text-xl text-white text-opacity-60'>React Native iOS and Android application using Typescript, Express, MongoDB, Firebase, OpenAI Assistants API</p>
        <p className='text-left lg:text-center text-lg md:text-xl text-white text-opacity-60 pt-4'>Comprehensive personalized pet care app for creating pet profiles, journal entries, veterinarian map locator</p>
        <p className='text-left lg:text-center text-lg md:text-xl text-white text-opacity-60 pt-4'>Separate conversation thread per registered pet with virtual veterinarian chatbot that retains pet profile information and previous conversation knowledge to generate personalized pet advice</p>
      </div>

      <h1 className='text-center text-[#FFD700] w-[80%] mx-auto mt-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Screen Flow Demo</h1>
      
      {/* Intro / Sign Up / Onboarding Screens */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Intro / Sign Up / Onboarding Screens</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app Intro */}
        {smartpawsImages.filter(project => project.category === 'Intro').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>
      
      {/* Add New Pet Profile */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Add New Pet Profile</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app AddPet */}
        {smartpawsImages.filter(project => project.category === 'AddPet').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>

      {/* Virtual Vet Chatbot */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Virtual Vet Chatbot</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app VirtualVet */}
        {smartpawsImages.filter(project => project.category === 'VirtualVet').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>

      {/* separate conversation thread per registered pet for personalized pet advice */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>separate conversation thread per registered pet for personalized pet advice</h1>
        <h1 className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>if 1st time inquiring about pet, new conversation thread created and pet details sent to OpenAI assistant</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app Separate */}
        {smartpawsImages.filter(project => project.category === 'Separate').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>

      {/* user query about pet */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>user query about pet</h1>
        <h1 className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>if my pet has not been eating much of anything even though food has been regularly available for the last 2 days and I am concerned</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app UserQuery */}
        {smartpawsImages.filter(project => project.category === 'UserQuery').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>

      {/* previous conversation info retained per pet profile */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>previous conversation info retained per pet profile</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app PrevConv */}
        {smartpawsImages.filter(project => project.category === 'PrevConv').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>

      {/* Journal Screen */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Journal Screen</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app Journal */}
        {smartpawsImages.filter(project => project.category === 'Journal').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>

      {/* Find Nearest Vets Screen */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-bg-band text-opacity-60 text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Find Nearest Vets Screen</h1>
      </div>
      <div className='w-[80%] mx-auto mt-2 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
        {/* screenshots of app Map */}
        {smartpawsImages.filter(project => project.category === 'Map').map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[600px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>

      {/* SmartPaws Team */}
      <div className='w-[80%] mx-auto mt-12 flex flex-col items-center justify-center'>
        <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem]'>
          <h2 className='text-center text-lime-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>SmartPaws Team</h2>
          <p className='text-center mt-6 text-xl md:text-2xl text-white text-opacity-60'>SmartPaws Virtual Veterinarian produced as a group project at the University of Texas at Arlington</p>
          <ul className="text-center mt-6 text-bg-band text-opacity-60 text-xl md:text-2xl">
            <li>Derrick Perry</li>
            <li>Omer Khan</li>
            <li>Nathan Fenoglio</li>
            <li>Ethyn Nguyen</li>
          </ul>
        </div>
        {/* github link */}
        <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[2vh]'>
          <div className='flex items-center justify-center mt-12'>
            <a 
              href='https://github.com/nathanfenoglio/SmartPaws' 
              target="_blank" 
              rel="noopener noreferrer" 
              data-aos='fade-right' 
              data-aos-delay='100' 
              className='text-center bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
            >
              Check out code on GitHub
            </a>
          </div>
          <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>Setup Instructions (If wanting to setup app to run with your own credentials/accounts) available in README</p>
        </div>
      </div>

    </div>
  )
}

export default SmartPaws
