import { escapeFromUTAImages } from '@/Data/projects'
import Image from 'next/image'
import React from 'react'

const EscapeFromUTA = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 text-white'>
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-zinc-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>Escape From Underground Terrestrial Abyss</h1>
        {/* <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>can add some talk about the video game if you want...</p> */}
      </div>

      <div className='flex justify-center'>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Image src={'/images/Title_Screen_Screenshot.jpg'} alt={'escapefromutatitlescreenshot'} width={500} height={500} />
        </div>
      </div>
      {/* -leading is the space between lines */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto text-center text-lg md:text-xl text-opacity-60 font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem] text-white'>
        <p className='mt-6'>Video game made with C# and Unity.</p>
        <p>2D platformer with maze design, switches, keys to unlock doors, powerups, enemies, bosses.</p>
        <p>Available to play with keyboard or touch screen controls at links below.</p>
      </div>

      <div className='w-[80%] mx-auto mt-2 xl:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 items-center'>
      {/* screenshots of game */}
        {escapeFromUTAImages.map((project, index) => {
          return ( 
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay={`${index * 50}`} key={project.id} className='relative w-full h-[300px] overflow-hidden rounded-lg'>
                <Image src={project.image} alt='project' layout='fill' objectFit='contain' className='rounded-lg'/>
            </div>
          )
        })}
      </div>
      {/* game play links */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[2vh] lg:mt-[4vh] text-center items-center justify-center'>
        <h1 className='text-[#FFD700] text-3xl sm:text-4xl md:text-5xl'>Play Game!!! If you want</h1>
        <div className='mt-12'>
          <a 
            href='https://simmer.io/@nathanfenoglio/escape-from-underground-terrestrial-abyss' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Play Game With Keyboard Controls
          </a>
        </div>
        <div className='mt-12'>
          <a 
            href='https://simmer.io/@nathanfenoglio/escape-from-underground-terrestrial-abyss-mobile-controls' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            style={{ animationDelay: "0.3s" }}
            className='bg-gradient-to-r from-[#00FFFF] to-[#FFD700] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Play Game With Touch Screen Controls
          </a>
        </div>
      </div>
      {/* youtube playthrough video */}
      <div className='w-[80%] mx-auto mt-12 flex flex-col items-center justify-center'>
        <h2 className='text-center text-lime-400 mt-[12vh] mb-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Watch the Playthrough</h2>
        <div
          key={'playthrough'}
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className="relative w-full md:w-[48%] lg:w-[30%] pt-[56.25%] lg:pt-[30%] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <iframe
            className='absolute top-0 left-0 w-full h-full rounded-lg'
            src={'https://www.youtube.com/embed/ar7niKAHrWI'}
            title={'Escape From UTA Playthrough'}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen>  
          </iframe>
        </div>
      </div>
      
      {/* development team */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h2 className='text-center text-lime-400'>Development Team</h2>
        <p className='text-center mt-6 text-lg md:text-xl lg:text-2xl text-white text-opacity-60'>Escape From UTA produced as a group project at the University of Texas at Arlington</p>
        <ul className="text-center mt-6 text-bg-band text-opacity-60 text-lg lg:text-2xl">
          <li>Samuel Schreiner</li>
          <li>Hoang Ho</li>
          <li>Hieu Vu</li>
          <li>Debbie Nguyen</li>
          <li>Nathan Fenoglio</li>
        </ul>
      </div>
      
      {/* github link */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://github.com/nathanfenoglio/Escape-From-Underground-Terrestrial-Abyss' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Check out code on GitHub
          </a>
        </div>
      </div>

    </div>  
  )
}

export default EscapeFromUTA
