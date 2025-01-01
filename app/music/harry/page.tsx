import { harryLiveData, harryPostApocalypseData } from '@/Data/musicdata'
import React from 'react'

const Harry = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 text-white overflow-hidden'>
      <div data-aos='fade-right' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-zinc-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem] text-white'>
        <h1 className='text-center'>Harry Has a Head Like a Ping Pong Ball</h1>
        {/* <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>can add some talk about Harry Has a Head Like a Ping Pong Ball history, members, timeline, etc if you want...</p> */}
      </div>

      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem] text-white'>
        <h2 className='text-center text-lime-400'>Post Apocalyptic Time Travel Core</h2>
        <ul className="text-center mt-6 text-bg-band text-opacity-60 text-lg">
          <li>Guitar: Travis Laminack</li>
          <li>Drums: Dustin Adams</li>
          <li>Bass: Nathan Fenoglio</li>
        </ul>
      </div>
      {/* youtube video links */}
      <div className='w-[80%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {harryPostApocalypseData.map((video) => (
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

      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem] text-white'>
        <h2 className='text-center text-lime-400'>Live at Andy&apos;s Denton, TX a Long Time Ago</h2>
        <ul className="text-center mt-6 text-bg-band text-opacity-60 text-lg">
          <li>Guitar: Travis Laminack</li>
          <li>Drums: Gabriel Pearson</li>
          <li>Bass: Nathan Fenoglio</li>
        </ul>
      </div>
      {/* soundcloud links */}
      <div className='w-[80%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {harryLiveData.map((video) => (
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

export default Harry
