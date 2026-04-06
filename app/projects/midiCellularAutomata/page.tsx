import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MidiCellularAutomata = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 text-white overflow-hidden'>
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-zinc-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>1D Cellular Automata Midi Sequencer</h1>
      </div>

      <div className='flex justify-center'>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Link target='_blank' href={'https://wolfram-cellular-automata-midi-note.vercel.app/'}>
            <Image src={'/images/cellular_automata_midi_seq_full.jpg'} alt={'cellularautomatamidiseqfull'} width={500} height={500} />
          </Link>
        </div>
      </div>

      {/* app description */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] lg:w-[50%] xl:w-[40%] pl-2 xl:pl-6 mx-auto text-start text-lg md:text-xl text-opacity-60 font-bold text-white space-y-4'>
        <p className='mt-6'>Created with Javascript and CSS using Web MIDI API to send MIDI messages</p>
        <p>runs in web browser, requires no setup if user already has midi ports configured on device</p>
        <p>Send midi notes to other applications for your sequencing pleasure</p>
      </div>

      {/* app link */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] xl:w-[40%] mx-auto mt-[2vh] lg:mt-[4vh] text-center items-center justify-center'>
        <h1 className='text-[#FFD700] text-3xl sm:text-4xl md:text-5xl'>Please use with your midi device at:</h1>
        <div className='mt-6 lg:mb-12 text-start md:text-center'>
          <a 
            href='https://wolfram-cellular-automata-midi-note.vercel.app//' 
            target='_blank' 
            rel='noopener noreferrer' 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            wolfram-cellular-automata-midi-note.vercel.app/
          </a>
        </div>
      </div>

      {/* Instructions */}
      <div className='w-[80%] mx-auto flex flex-col items-center justify-center'>
        <h2 className='text-center text-lime-400 mt-[6vh] lg:mb-[3vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Demo</h2>

        <div className='w-[80%] max-w-[800px] mt-12'>
              <div
                key="demo"
                className='relative w-full pt-[56.25%] bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300'>
                <iframe
                  className='absolute top-0 left-0 w-full h-full rounded-lg'
                  src="https://www.youtube.com/embed/4Zc-mo71nYo"
                  title="1D Cellular Automata Midi Sequencer Demo"
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen>  
                </iframe>
              </div>
        </div>


        <h2 className='text-center text-lime-400 mt-[6vh] lg:mb-[3vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>Instructions</h2>
        <div className='w-[80%] mx-auto text-center text-lg md:text-xl text-opacity-60 font-bold text-white'>
          <p className='mt-6'>This is a tutorial on how to use the 1D Cellular Automata Midi Sequencer</p>
          <p>this app is available to use in your web browser at the above link</p>
          <p>and will allow you to create rhythms derived from a horizontal cross section</p>
          <p>of any of Stephen Wolfram&apos;s 1D Cellular Automata</p>
          <a 
            href='https://mathworld.wolfram.com/ElementaryCellularAutomaton.html' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='bg-clip-text font-bold hover:scale-105 underline'
          >
            Elementary Cellular Automaton
          </a>
          <p>to illustrate how the patterns are created</p>
          <p>the app has an option to visualize the rule when I select auto run</p>
          <div className='relative w-full h-[300px] overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_1.png' alt='cellular_automata_midi_seq_1' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='md:mt-12'>the specified rule is repeatedly run and displayed in the bottom portion of the app</p>
          <div className='relative w-full h-[200px] md:h-[500px] overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_2.png' alt='cellular_automata_midi_seq_2' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>the set of operations are displayed right here</p>
          <p>and represent how a cell will evolve on each iteration based on the 3 cells above it</p>
          <p>for instance, for rule 30 if the cell to the top left is black,</p>
          <p>the cell directly above is white, and the cell to the top right is white, then the cell below will be white</p>
          <p>and all of the other possible possibilities are outlined depending on which rule is specified</p>
          {/* <div className='relative w-full h-[500px] overflow-hidden rounded-lg md:mt-6'> */}
          <div className='relative w-full max-w-[500px] h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_3.png' alt='cellular_automata_midi_seq_3' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p>you can specify any one of 0-255 rules in this field</p>
          <p>and the Step Reset and Auto-run controls are all for the visualization of the rule</p>
          <div className='relative w-full max-w-[500px] h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_4.png' alt='cellular_automata_midi_seq_4' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>here are the controls to use for creating midi sequences</p>
          <p>Row specifies which of the horizontal rows of the cellular automaton to use for the rhythm</p>
          <p>for instance if I specify row 16, the rhythm is specified as 1s for notes and 0s for rests</p>
          <p>following the pattern of black and white squares in that row</p>
          <p>you can group together the rhythm in whatever note grouping to help visualize the pattern</p>
          <div className='relative w-full h-[250px] md:h-[400px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_5.png' alt='cellular_automata_midi_seq_5' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>you have the option to adjust the start point of the rhythm with the start index </p>
          <p>you can see how the rhythm is getting cyclically shifted to start on the start index that I specified</p>
          <div className='relative w-full max-w-[500px] h-[100px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_6.png' alt='cellular_automata_midi_seq_6' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <div className='relative w-full max-w-[500px] h-[100px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_7.png' alt='cellular_automata_midi_seq_7' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <div className='relative w-full max-w-[500px] h-[100px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_8.png' alt='cellular_automata_midi_seq_8' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>there is the option to remove notes from the left or the right of the row rhythm</p>
          <p>for instance there are 33 notes in row 16 in this example</p>
          <p>and I would like to create a rhythm that fits into a 2 bar space</p>
          <p>so I will remove the last note from the rhythm sequence from the right</p>
          <p>the # of row cells are displayed as a guide to how many 16th notes are in the rhythm</p>
          <div className='relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_9.png' alt='cellular_automata_midi_seq_9' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>you then have the selection of the notes that you want to play on the rhythm section</p>
          <p>there are an assortment of scales that you can select from the drop down menu</p>
          <div className='relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_10.png' alt='cellular_automata_midi_seq_10' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p>or you can manually enter midi note values (middle C is 60 for example)</p>
          <p>directly into the input box</p>
          <p>these notes will be cycled through and played in order</p>
          <p>for every black cell or 1 in the row rhythm</p>
          <div className='relative w-full max-w-[500px] h-[100px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_11.png' alt='cellular_automata_midi_seq_11' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>there is the option to transpose all of the notes</p>
          <p>up or down 1 pitch value at a time</p>
          <div className='relative w-full max-w-[500px] h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_12.png' alt='cellular_automata_midi_seq_12' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <div className='relative w-full max-w-[500px] h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_13.png' alt='cellular_automata_midi_seq_13' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>and an option to randomize the sequence of the notes</p>
          <p>in the scale that is cycled through</p>
          <div className='relative w-full max-w-[500px] h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_14.png' alt='cellular_automata_midi_seq_14' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>here is where you can set the tempo in beats per minute</p>
          <p>to your desired speed</p>
          <div className='relative w-full max-w-[500px] h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_15.png' alt='cellular_automata_midi_seq_15' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>and adjust the beat division in relation to the tempo</p>
          <div className='relative w-full max-w-[500px] h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_15_5.png' alt='cellular_automata_midi_seq_15' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>the # of hits, # notes in seq, repeats after displayed values</p>
          <p>are for reference to be able to have an idea on how the # of notes</p>
          <p>in the note sequence interacts with the # of notes in the rhythm sequence</p>
          <p>as in how many hits are in the rhythm sequence</p>
          <p>and how many notes are in the MIDI note sequence</p>
          <p>and how many times it will take to go through the row</p>
          <p>before the 1st note is also the 1st hit of the sequence</p>
          <p className='mt-6'>in the below example the # of hits in the rhythm sequence is 14 (# of notes and not rests)</p>
          <p>and the # of notes in the MIDI notes sequence is 6</p>
          <p>repeats after is calculated to be 3</p>
          <p>(after 3 cycles through the rhythm sequence</p>
          <p>the 1st note in MIDI notes will be the 1st hit in the rhythm sequence again</p>
          <p>and the pattern repeats)</p>
          <div className='relative w-full max-w-[500px] h-[200px] md:h-[300px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_16.png' alt='cellular_automata_midi_seq_16' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>the equivalence rules</p>
          <p>as in mirror symmetric and swapping the black cells with the white cells</p>
          <p>are displayed here for the user&apos;s reference</p>
          <div className='relative w-full max-w-[500px] h-[300px] md:h-[500px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_17.png' alt='cellular_automata_midi_seq_17' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>actual midi note sending</p>
          <p>if you already have midi routing configured on your computer</p>
          <p>then the available midi output device will show up to select</p>
          <p>when you press SEND MIDI</p>
          <p className='mt-6'>I&apos;m using loop be 30 to create the virtual midi ports on my windows laptop</p>
          <p>to send the midi information to ableton but however you have your setup set up</p>
          <p>your available midi ports should be detected</p>
          <div className='relative w-full max-w-[500px] h-[100px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_18.png' alt='cellular_automata_midi_seq_18' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <div className='relative w-full max-w-[500px] h-[100px] md:h-[200px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_19.png' alt='cellular_automata_midi_seq_19' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>so can run this outside of your daw from the web browser</p>
          <p>at least a piece of the application needs to remain in focus</p>
          <p>for the midi notes to be sent accurately</p>
          <div className='relative w-full max-w-[1000px] h-[200px] md:h-[600px] mx-auto overflow-hidden rounded-lg md:mt-6'>
            <Image src='/images/cellular_automata_midi_seq_20.png' alt='cellular_automata_midi_seq_20' layout='fill' objectFit='contain' className='rounded-lg'/>
          </div>
          <p className='mt-6'>to demo on mobile devices you could download FluidSynth MIDI Synthesizer</p>
          <p>for free and it will show up as an available output to send midi from the app to</p>
          <div className='mt-6 lg:mb-12 text-center'>
            <a 
              href='https://play.google.com/store/apps/details?id=net.volcanomobile.fluidsynthmidi&hl=en_US' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='bg-clip-text font-bold hover:scale-105 underline'
            >
              FluidSynth MIDI Synthesizer
            </a>
          </div>
          <p>or on ios devices I find that you could download NS Midi Player</p>
          <div className='mt-6 lg:mb-12 text-center'>
            <a 
              href='https://apps.apple.com/us/app/ns-midi-player/id1514225088' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='bg-clip-text font-bold hover:scale-105 underline'
            >
              NS MIDI Player
            </a>
          </div>
          <p>and Web MIDI Browser to load this app on</p>
          <div className='mt-6 lg:mb-12 text-center'>
            <a 
              href='https://apps.apple.com/us/app/web-midi-browser/id953846217' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='bg-clip-text font-bold hover:scale-105 underline'
            >
              Web MIDI Browser
            </a>
          </div>
          <p className='mt-6'>there is a lot to play around with here and I have had a lot of fun</p>
          <p>exploring patterns to create musical ideas with</p>
          <p>give it a go and see if you find any patterns that strike your interest</p>
          {/* app link */}
          <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] xl:w-[40%] mx-auto mt-[2vh] lg:mt-[4vh] text-center items-center justify-center'>
            <h1 className='text-[#FFD700] text-3xl sm:text-4xl md:text-5xl'>Please use with your midi device at:</h1>
            <div className='mt-6 lg:mb-12 text-start md:text-center'>
              <a 
                href='https://wolfram-cellular-automata-midi-note.vercel.app/' 
                target='_blank' 
                rel='noopener noreferrer' 
                data-aos='fade-right' 
                data-aos-delay='100' 
                className='bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
              >
                wolfram-cellular-automata-midi-note.vercel.app
              </a>
            </div>
          </div>
        </div>
      </div>
            
      {/* github link */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[6vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://github.com/nathanfenoglio/wolfram-cellular-automata-midi-notes.git' 
            target='_blank' 
            rel='noopener noreferrer' 
            data-aos='fade-right' 
            data-aos-delay='100' 
            style={{ animationDelay: '0.3s' }}
            className='bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Check out code on GitHub
          </a>
        </div>
      </div>

    </div>  
  )
}

export default MidiCellularAutomata
