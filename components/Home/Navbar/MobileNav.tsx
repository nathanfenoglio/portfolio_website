import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { usePathname } from 'next/navigation';

// when navigating to a new page sometimes the mobile nav bar does not fully load until all of the aos animations have finished...
// it does once the user has scrolled down far enough for all of the animations to finish 

// define Props types that you are receiving from ResponsiveNav.tsx
type Props = {
  showNav: boolean,
  closeNav: () => void
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  // showNav is a boolean that is passed from ResponsiveNav.tsx and is initially false
  // so if not true, then nav bar is translated to the left off of the screen
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  const pathname = usePathname();
  return (
    <div>
      {/* nav links */}
      {/* flex flex-col flexes in the column direction, space-y-8 is used to create space between the links */}
      <div className={`transform transition-all duration-500 delay-300 ${navOpen} text-white fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-8 z-[10000]`}>
        {/* if the current page is not the home page, then only show the home link since other navbar items are specific to position of section on the Home page itself */}
        {pathname === '/' ?
          navLinks.map((navlink) => {
            return (
              <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
                <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{navlink.title}</p>
              </Link>
            )
          })
        :
          navLinks.filter((link) => link.title === 'Home').map((navlink) => {
            return (
              <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
                <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{navlink.title}</p>
              </Link>
            )
          })
        }

        {/* close button */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white'/>
      </div>
    </div>
  )
}

export default MobileNav
