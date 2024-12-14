"use client";
import React from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = React.useState(false);
  const showNavHandler = () => {
    setShowNav(true);
  }
  const closeNavHandler = () => {
    setShowNav(false);
  }

  return (
    // different navbars used for different screen sizes and Nav and MobileNav used together to render differently under different screen sizes
    <>
      {/* define openNav prop in Nav.tsx to be able to receive the showNavHandler function */}
      <Nav openNav={showNavHandler}/>
      {/* define showNav boolean and closeNav function in MobileNav.tsx to be able to receive the showNav and closeNavHandler functions */}
      <MobileNav closeNav={closeNavHandler} showNav={showNav}/>
    </>
  )
}

export default ResponsiveNav
