import Image from 'next/image'
import React from 'react'

const MultiDimensionalMazes = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>Multidimensional Mazes With 3D Rotations</h1>
      </div>

      <div className='flex justify-center'>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Image src={'/images/Picture1.png'} alt={'multidimensionalmazesscreenshot'} width={600} height={600} />
        </div>
      </div>
      {/* game description */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem]'>
        <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>Javascript web app using p5.js library that generates a</p>
        <p className='text-center text-lg md:text-xl text-white text-opacity-60'>3 dimensional maze of user specified dimensions using depth first search traversal</p>
        <p className='text-center text-lg md:text-xl text-white text-opacity-60'>represented as a series of connected 2 dimensional planes</p>
        <p className='text-center text-lg md:text-xl text-white text-opacity-60'>Ability to rotate the maze in all of 6 possible ways (up, down, left, right, in, out)</p>
        <p className='text-center text-lg md:text-xl text-white text-opacity-60'>to change perspective of player&apos;s approach to same maze</p>
        <p className='text-center text-lg md:text-xl text-white text-opacity-60'>Available to play at link below.</p>
      </div>

      {/* game play link */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[6vh] lg:mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://nathanfenoglio.github.io/multi_dimensional_mazes_with_3D_rotations/' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-center bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Click Link To Play Game
          </a>
        </div>
      </div>

      {/* youtube playthrough video */}
      <div className='w-[80%] mx-auto mt-12 flex flex-col items-center justify-center'>
        <h2 className='text-center text-lime-400 w-[80%] mx-auto mt-[6vh] lg:mt-[12vh] mb-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Video</h2>
        <div
          key={'playthrough'}
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className="relative w-full md:w-[48%] lg:w-[30%] pt-[56.25%] lg:pt-[30%] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <iframe
            className='absolute top-0 left-0 w-full h-full rounded-lg'
            src={'https://www.youtube.com/embed/12a4xSNXZtA'}
            title={'Vexed'}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen>  
          </iframe>
        </div>
      </div>

      {/* github link */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh]'>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://github.com/nathanfenoglio/multi_dimensional_mazes_with_3D_rotations' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-center bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Check out code on GitHub
          </a>
        </div>
      </div>

      {/* other maze games to play */}
      <div className='w-[80%] mx-auto mt-12 flex flex-col items-center justify-center'>
        <h2 className='text-center text-lime-400 w-[80%] mx-auto mt-[12vh] mb-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Other Maze Games To Play</h2>
        <div className='flex justify-center'>
          <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
            <Image src={'/images/CubeMazeImage.jpg'} alt={'cubemazeimage'} width={600} height={600} />
          </div>
        </div>

        {/* game play link */}
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://nathanfenoglio.github.io/cube_maze//' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-left' 
            data-aos-delay='100' 
            className='text-center bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Click to Play Other Maze Games
          </a>
        </div>

        {/* github link */}
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://github.com/nathanfenoglio/cube_maze' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            style={{ animationDelay: "0.3s" }}
            className='text-center bg-gradient-to-r from-[#00FFFF] to-[#FFD700] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Check out code on GitHub
          </a>
        </div>

      </div>

    </div>  
  )
}

export default MultiDimensionalMazes
