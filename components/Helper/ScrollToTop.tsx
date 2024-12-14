'use client'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      <button onClick={scrollToTop} className='bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
        <FaArrowUp />
      </button>
    </div>
  )
}

export default ScrollToTop
