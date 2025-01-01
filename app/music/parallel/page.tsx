import { parallelData } from '@/Data/musicdata'
import React from 'react'

const Parallel = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 text-white overflow-hidden'>
      <div data-aos='fade-right' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-zinc-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center'>Parallel Realities</h1>
        {/* <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>can add some talk about Parallel Realities history, members, timeline, etc if you want...</p> */}
      </div>

      {/* -leading is to specify the line height like space in between lines */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem] text-white'>
        <h2 className='text-center text-lime-400'>Self Titled</h2>
        <ul className="text-center mt-6 text-bg-band text-opacity-60 text-lg">
          <li>Vocals: Rocio Herrera</li>
          <li>Drum Set: Garrett Gross</li>
          <li>Auxiliary Percussion: Eric Rogers</li>
          <li>Keys: Sean Pollaro</li>
          <li>Guitar: Chris Belknap</li>
          <li>Bass: Nathan Fenoglio</li>
        </ul>
      </div>
      {/* soundcloud links */}
      <div className='w-[80%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {parallelData.map((video) => (
            <div
              key={video.id}
              className='relative w-full pt-[56.25%] bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300'>
              <iframe
                className='absolute top-0 left-0 w-full h-full rounded-lg'
                src={video.url}
                title={video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen>  
              </iframe>
            </div>
          ))}
      </div>

    </div>

  )
}

export default Parallel
