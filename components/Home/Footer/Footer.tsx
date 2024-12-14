'use client';
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';


const Footer = () => {
  const pathname = usePathname();

  return (
    // fixed bottom-0 w-full is what you would add to the className to make the footer fixed to the bottom of the screen no matter where the user scrolled
    <div className='pt-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      <div className='flex items-center p-8 flex-col'>
        <h1 className='text-4xl xl:text-5xl font-bold text-white'>Nathan Fenoglio</h1>
      </div>
      <div className='flex items-center flex-wrap justify-center space-x-4 lg:space-x-10 text-white font-bold'>
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
        <p className='text-white text-opacity-60 text-center mt-6'>Copyright &copy; 2024. All Rights Reserved.</p>
      </div>
  )
}

export default Footer
