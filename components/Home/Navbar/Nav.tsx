'use client';
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
// import React, { useEffect } from 'react'
import { HiBars3 } from 'react-icons/hi2'
import { usePathname } from 'next/navigation';

// by including overflow-hidden in the outermost div of each page, you were able to keep the navbar and hamburger menu icon visible on all screens

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  // need to use client; when using state with nextjs
  // const [navBg, setNavBg] = React.useState(false);
  const pathname = usePathname();

  // keeping this commented out for now and just using bg-blue-600 instead of changing navbar background on scroll
  // useEffect(() => {
  //   const handler = () => {
  //     if (window.scrollY >= 90) {
  //       setNavBg(true);
  //     }
  //     else {
  //       setNavBg(false);
  //     }
  //   }
  //   window.addEventListener('scroll', handler);
  //   return () => {
  //     window.removeEventListener('scroll', handler);
  //   }
  // })
  return (
    // fixed - stays in same place when user scrolls, height 12% of the viewport, z index is the relative order like a higher z would display on top of lower z, 
    // background color, full width of screen
    // use navBg to change the background color of navbar based on if the user has scrolled (not changing background color on scroll right now)
    // <div className={`fixed ${navBg ? 'bg-purple-700' : 'bg-[#240b39]'} h-[12vh] z-[10] bg-blue-600 w-full`}>
    // <div className='fixed bg-blue-600 h-[12vh] z-[10] w-full'>
    <div className='fixed bg-purple-700 h-[12vh] z-[10] w-full'>
    {/* <div className='fixed bg-purple-700 h-[12vh] z-[10] max-w-full lg:w-full'> */}
      {/* flexbox flexible positioning and spacing of child elements, items-center centers the child elements vertically, h-full fills the entire height of the parent element */}
      {/* specified widths for average, small, and large screens, mx-auto centers the div element horizontally */}
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        {/* left navbar logo */}
        <h1 className='w-[40%] text-4xl xl:text-5xl font-bold text-white'>Nathan Fenoglio</h1>
        
        {/* right navbar links */}
        <div className='flex items-center space-x-10'>
          <div className='hidden lg:flex space-x-8'>
            {/* create a constant folder (all the way out) to put all of the navbar links into so not so much code here */}
            {/* use map to iterate through the constant array */}
            {/* if the current page is not the home page, then only show the home link since other navbar items are specific to positon of section on the Home page itself */}
            {pathname === '/' ?
              navLinks.map((navlink) => {
                return (
                  <Link key={navlink.id} href={navlink.url} >
                    <p className='nav__link'>{navlink.title}</p>
                  </Link>
                )
              })
            :
              navLinks.filter((link) => link.title === 'Home').map((navlink) => {
                return (
                  <Link key={navlink.id} href={navlink.url} >
                    <p className='nav__link'>{navlink.title}</p>
                  </Link>
                )
              })
            }

          </div>
        </div>
        {/* hamburger */}
        <HiBars3 onClick={openNav} className='lg:hidden w-8 h-8 text-white cursor-pointer hover:text-slate-200' />
      </div>
    </div>  
  )
}

export default Nav
