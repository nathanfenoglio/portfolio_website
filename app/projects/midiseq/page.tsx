import Image from 'next/image'
import React from 'react'

const MidiSeq = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      {/* app name */}
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>Midi VST3 Plugin Multi Sequence Manipulator</h1>
      </div>

      {/* app image */}
      <div className='flex justify-center'>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Image src={'/images/midi_seq_screenshot_1.jpg'} alt={'midiseqscreenshot'} width={800} height={800} />
        </div>
      </div>

      {/* app description */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] md:w-[50%] mx-auto'>
        <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60 font-bold'>VST3 plugin able to be used in DAW that takes 2 sequences and allows user to perform all sorts of operations on them to generate midi output sequences in sync with DAW&apos;s tempo clock using C++ and Juce framework. Great for generating new sequences from existing ones and endless experimentation.</p>
      </div>

      {/* Operations */}
      <div className='w-[80%] md:w-[55%] mx-auto mt-12 flex flex-col items-left justify-left'>
        <h2 className='text-center text-lime-400 w-[80%] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Operations:</h2>
        <ul className="text-left mt-6 text-white text-opacity-80 text-lg md:text-xl lg:text-2xl">
          <li><span className='text-[#00FFFF]'>Mod By Add By:</span> mod each # in sequence by &quot;mod by&quot; value then add &quot;add by&quot; value</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>Add By Mod By:</span> add each # in sequence by &quot;add by&quot; value then mod by &quot;mod by&quot; value</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>Rotate Left:</span> rotates the sequence to the left with the leftest # wrapping around to the rightest most index</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>Rotate Right:</span> rotates the sequence to the right with the rightest # wrapping around to the first index</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>Reverse:</span> reverses sequence</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>Sum Inversion:</span> inverts each # in sequence, for instance if # is 3 and &quot;sum inversion #&quot; is 10 then new # will be 10 - 3 = 7</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>Tower of Hanoi it:</span> takes the 1st &quot;# discs t_o_h&quot; # of digits in sequence, maps them to discs, and executes tower of hanoi discs on poles algorithm generating sequence by starting from bottom of poles going left to right on poles for each move until solved</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>apply replacement:</span> replace a substring in whichever sequence with another substring</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>splice sequences:</span> takes 1 element from 1 sequence and then 1 element from the other sequence repeatedly until both sequences are interleaved</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>multiply sequences by scalars add together mod by:</span> multiplies each sequence by respective specified scalar, adds sequences together, then mods by &quot;mod by&quot; value</li>
        </ul>
      </div>

      {/* github link */}
      <div className='w-[80%] mx-auto mt-[2vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://github.com/nathanfenoglio/Juce-Midi-VST3-Plugin-Multi-Sequence-Manipulator' 
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

export default MidiSeq
