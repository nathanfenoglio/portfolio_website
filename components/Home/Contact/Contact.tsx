import React from 'react'
// import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-gradient-to-r from-black via-purple-500 to-grey-500'>
      <div className='grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10'>
        {/* contact form */}
        {/* <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
          <ContactForm />
        </div> */}
        <div className='flex flex-col items-center'>
          <h1 className='text-bg text-[26px] text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 xl:pb-6'>
            Let&apos;s Work Together!
          </h1>
          <p data-aos='fade-left' data-aos-delay='200' className='sm:text-2xl md:text-3xl lg:text-4xl md:text-base text-white text-opacity-60'>Please contact me</p>
        </div>

        {/* contact info */}
        {/* <div className='xl:mx-auto' data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='100'> */}
        <div className='xl:mx-auto'>
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

export default Contact
