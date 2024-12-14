'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Project from './Project/Project'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // for scrolling animations
import MusicProjects from './MusicProjects/MusicProjects'

// home page with all of the sections brought in and arranged in order to be displayed
const Home = () => {
  // for scrolling animations
  useEffect(() => {
    const initAOS = () => {
      // await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    }

    initAOS();
  }, [])
  return (
    <div className='overflow-hidden'>
      {/* assign id to each section to be able to scroll to them with navbar links */}
      <div id='hero'>
        <Hero />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='project'>
        <Project />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='music'>
        <MusicProjects />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>

  )
}

export default Home
