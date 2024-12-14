import Image from 'next/image'
import React from 'react'

const MidiHarmonizer = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      {/* app name */}
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>Midi Harmonizer Plugin</h1>
      </div>

      {/* app image */}
      <div className='flex justify-center'>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Image src={'/images/midi_harmonizer_screenshot_1.jpg'} alt={'midiharmonizerscreenshot'} width={800} height={800} />
        </div>
      </div>

      {/* app description */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] md:w-[50%] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md-leading-[3rem] lg-leading-[3.5rem] xl-leading-[4rem]'>
        <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>VST3 Midi plugin created with Juce framework for user to input scale for harmony and intervals to add to be used in DAW.</p>
        <p className='text-center mt-2 text-lg md:text-xl text-white text-opacity-60'>Created with C++ and the Juce framework.</p>
        <p className='text-center mt-2 text-lg md:text-xl text-white text-opacity-60'>User inputs a scale (midi note numbers) that will harmonize with incoming midi notes in the intervals (how many notes in the scale to move up/down) specified by the user.</p>
      </div>

      {/* github link */}
      <div className='w-[80%] mx-auto mt-[6vh]'>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://github.com/nathanfenoglio/MidiHarmonizerJucePlugin' 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-center bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Check out code on GitHub
          </a>
        </div>
      </div>

    </div>  
  )
}

export default MidiHarmonizer
