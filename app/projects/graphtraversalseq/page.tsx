import Image from 'next/image'
import React from 'react'

const GraphTraversalSeq = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      {/* app name */}
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>Graph Traversal Sequencer</h1>
      </div>

      {/* app image */}
      <div className='flex justify-center'>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Image src={'/images/GraphTraversalSequencerImage.jpg'} alt={'graphtraversalscreenshot'} width={800} height={800} />
        </div>
      </div>

      {/* app description */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] md:w-[50%] mx-auto font-bold md-leading-[5rem] lg-leading-[5.5rem] xl-leading-[6rem] text-lg md:text-xl text-white text-opacity-60'>
        <p className='mt-6'>Desktop application for drawing graphs and generating midi note sequences using IMGUI and C++</p>
        <p className='mt-2'>Graph nodes to represent midi notes and edges to represent connections between midi notes</p>
        <p className='mt-2'>Generates all possible sequences from exploring all possible paths through graph from user specified start node</p>
        <p className='mt-2'>Draw nodes of midi notes and connecting edges to create music sequences</p>
      </div>

      {/* download installer link */}
      <div className='w-[60%] mx-auto'>
        <h1 className='text-center mt-12 text-[#00FFFF] text-opacity-80 text-lg md:text-3xl lg:text-4xl break-words'>Download GraphTraversalSequencerSetup.msi to try out on Windows devices</h1>
      </div>

      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto'>
        <div className='flex items-center justify-center mt-12'>
          <a 
            href='https://app.box.com/s/xfcio6glciu63e0uqhwhqmjvi1tb092r' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='text-center bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Click Link To Install For Windows
          </a>
        </div>
      </div>

      {/* how to use */}
      <div className='w-[80%] md:w-[55%] mx-auto mt-[12vh] flex flex-col items-left justify-left'>
        <h2 className='text-center text-lime-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>How To Use:</h2>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Image src={'/images/GraphTraversalSequencerInstructionsImage.jpg'} alt={'graphtraversalinstructionsscreenshot'} width={1000} height={1000} />
        </div>

        {/* options description */}
        <ul className="text-left mt-6 text-white text-opacity-80 text-lg md:text-xl lg:text-2xl">
          <li>GRAPH BUILDING OPTIONS to select</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>NO DRAW:</span> no node or edge is added/removed</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>ADD NODE:</span> place node at position of mouse click on screen</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>ADD EDGE:</span> click &quot;originating node&quot; of edge that you wish to add from graph, then click &quot;end of arrow&quot; node to add edge from &quot;originating node&quot; to &quot;end of arrow&quot; node</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>REMOVE NODE:</span> remove node at position of mouse click and all edges connected</li>
          <li className='pt-6 md: pt-2'><span className='text-[#00FFFF]'>REMOVE EDGE:</span> click &quot;originating node&quot; of edge that you wish to remove from graph, then click &quot;end of arrow&quot; node to remove edge</li>
          <li className='pt-6 md: pt-6'><span className='text-[#00FFFF]'>DIRECTED/UNDIRECTED GRAPH:</span> select undirected if you want to add an edge in both directions when adding an edge</li>
          <li className='pt-6 md: pt-6'><span className='text-[#00FFFF]'>START NODE:</span> specify the start node (index of node to begin traversing graph from)</li>
          <li className='pt-6 md: pt-6'>Can specify a midi note for each individual node or defaults to node index number For instance music note middle C is midi note # 60</li>
          <li className='pt-6 md: pt-6'><span className='text-[#00FFFF]'>GENERATE SEQUENCE:</span> Finds all possible paths through graph. Lists each path separately and then concatenates into ALL POSSIBLE PATHS ALTOGETHER box to copy</li>
          <li className='pt-6 md: pt-6'><span className='text-[#00FFFF]'># of notes in all possible paths altogether:</span> Displays # of notes when putting together all of the individual possible graph traversal sequences</li>
          <li className='pt-6 md: pt-6'><span className='text-[#00FFFF]'>factors of # of notes:</span> Just displaying the factors of the # of notes in the ALL POSSIBLE PATHS ALTOGETHER sequence for reference</li>
          <li className='pt-6 md: pt-6'><span className='text-[#00FFFF]'>Adjacency Matrix:</span> Display matrix representation of graph. For each row, the column # represents a node able to be traveled to from the row node</li>
        </ul>
      </div>

      {/* github link */}
      <div data-aos='fade-left' data-aos-delay='100' className='w-[80%] mx-auto mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <div className='flex text-center justify-center mt-12'>
          <a 
            href='https://github.com/nathanfenoglio/Graph-Traversal-Sequencer' 
            target="_blank" 
            rel="noopener noreferrer" 
            data-aos='fade-right' 
            data-aos-delay='100' 
            className='bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Check out code on GitHub
          </a>
        </div>
      </div>

    </div>  
  )
}

export default GraphTraversalSeq
