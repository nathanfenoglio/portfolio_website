import Image from 'next/image'
import React from 'react'

const RestaurantMenus = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500 overflow-hidden'>
      {/* app name */}
      <div data-aos='fade-right' data-aos-delay='100' className='mt-[12vh] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
        <h1 className='text-center w-[60%] mx-auto text-[#00FFFF]'>Restaurant Menus</h1>
      </div>

      {/* app image */}
      <div className='flex justify-center'>
        <div data-aos='zoom-in' data-aos-delay='400' className='mt-6 mx-auto rounded-[3rem] p-6'>
          <Image src={'/images/restaurant_screenshot_1.png'} alt={'restaurantscreenshot'} width={800} height={800} />
        </div>
      </div>

      {/* app description */}
      <div className='w-[80%] md:w-[50%] mx-auto'>
        <p className='text-center mt-6 text-lg md:text-xl text-white font-bold text-opacity-60'>Web App using TypeScript and React that displays restaurants for user to select from and allows user to select menu items for 2 diners with certain rule constraints enforced and ability to delete menu items previously selected</p>
      </div>

      {/* github link */}
      <div className='w-[80%] mx-auto'>
        <div className='flex mt-[2vh] items-center justify-center '>
          <a 
            href='https://github.com/nathanfenoglio/restaurant-menus-react-typescript-web-app' 
            target="_blank" 
            rel="noopener noreferrer" 
            className='text-center bg-gradient-to-r from-[#FFD700] to-[#00FFFF] bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold hover:scale-105 transition-transform duration-300 animate-blink hover:animate-none'
          >
            Check out code on GitHub
          </a>
        </div>
        <p className='text-center mt-6 text-lg md:text-xl text-white text-opacity-60'>Compilation Instructions available in README</p>
      </div>

    </div>  
  )
}

export default RestaurantMenus
