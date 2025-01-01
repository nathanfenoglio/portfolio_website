import { soloMusicData } from '@/Data/musicdata'
import React from 'react'

const SoloElectronicMusic = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 text-white overflow-hidden'>
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center text-[#00FFFF]'>Solo Electronic Music</h1>
        {/* <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>some talk about my illustrious career with electronic music if you want...</p> */}
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://soundcloud.com/flimmflamm23' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-bg-band text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300'
          >
            Listen On Soundcloud
          </a>
        </div>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://www.youtube.com/channel/UCu2L2DwJfQsSkZdv3GtGwzQ/videos?view=0&sort=p' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-bg-band text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300'
          >
            YouTube Channel
          </a>
        </div>

      </div>

      <div className='w-[90%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {soloMusicData.map((video) => (
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

export default SoloElectronicMusic
