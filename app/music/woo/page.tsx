import { wooLiveData } from '@/Data/musicdata'
import Image from 'next/image'
import React from 'react'

const Woo = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 text-white'>
      <div data-aos='fade-right' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-zinc-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center'>Wrought of Obsidian</h1>
        {/* <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>can add some talk about Wrought of Obsidian history, members, timeline, etc if you want...</p> */}
      </div>

      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h2 className='text-center text-lime-400'>Children of a Shattered Infinity</h2>
        
        <div className='flex justify-center'>
          <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem]'>
            <Image src={'/images/ChildrenOfAShatteredInfinityCover.jpg'} alt={'coasialbumart'} width={500} height={500} />
          </div>
        </div>

        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://wroughtofobsidian.bandcamp.com/album/children-of-a-shattered-infinity' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-bg-band text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300'
          >
            Listen On Bandcamp
          </a>
        </div>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://open.spotify.com/album/6Be7lXxBNAstVgzhiT42TL?si=RMauNV7VTMW0sQ57VdWTDQ' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-left' 
            data-aos-delay='100' 
            className='text-bg-band text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300'
          >
            Listen On Spotify
          </a>
        </div>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://www.youtube.com/playlist?list=OLAK5uy_kqzjx5Noxy7umwbnLDkrYvGhfBoo_4zdI' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-bg-band text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300'
          >
            Listen On YouTube
          </a>
        </div>
      </div>

      {/* At Long Last */}
      <div className='w-[80%] mx-auto mt-12 flex flex-col items-center justify-center'>
        <h2 className='text-center text-lime-400 w-[80%] mx-auto mt-[12vh] mb-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>At Long Last</h2>
        <div
          key={'at-long-last'}
          data-aos='fade-up'
          data-aos-anchor-placement='top-center'
          className="relative w-full md:w-[48%] lg:w-[30%] pt-[56.25%] lg:pt-[30%] bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <iframe
            className='absolute top-0 left-0 w-full h-full rounded-lg'
            src={'https://www.youtube.com/embed/2APEz7dNrDM'}
            title={'At Long Last'}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen>  
          </iframe>
        </div>
      </div>

      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h2 className='text-center text-lime-400'>Video</h2>
      </div>

      {/* youtube links */}
      <div className='w-[80%] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {wooLiveData.map((video) => (
            <div
              key={video.id}
              data-aos='fade-up'
              data-aos-anchor-placement='top-center'
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

      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h2 className='text-center text-lime-400'>Purchase Merch</h2>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://wroughtofobsidian.dizzyjam.com/' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-bg-band text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300'
          >
            Buy Stuff
          </a>
        </div>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://wroughtofobsidian.bigcartel.com/' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-bg-band text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300'
          >
            Buy Stuff
          </a>
        </div>
      </div>

    </div>
  )
}

export default Woo
