import { contactData } from '@/Data/data'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaMap, FaGithub, FaLinkedin } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div>
      {/* Email */}
      <div className='flex mt-6 items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
        <div>
          <h1 className='text-lg md:text-xl font-bold text-white'>Email</h1>
          <h1 className='text-base md:text-lg text-white text-opacity-70'>{contactData.email}</h1>
        </div>
      </div>

      {/* Address */}
      <div className='flex mt-6 items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaMap className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
        <div>
          <h1 className='text-lg md:text-xl font-bold text-white'>Address</h1>
          <h1 className='text-base md:text-lg text-white text-opacity-70'>{contactData.address}</h1>
        </div>
      </div>

      {/* Github */}
      <div className='flex mt-6 items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaGithub className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
        <div>
          <h1 className='text-lg md:text-xl font-bold text-white'>Github</h1>
          <Link href='https://github.com/nathanfenoglio' target='_blank'>
            <p className='text-base md:text-lg text-white text-opacity-70'>github.com/nathanfenoglio</p>
          </Link>
        </div>
      </div>

      {/* Linkedin */}
      <div className='flex mt-6 items-center space-x-8'>
        <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
          <FaLinkedin className='w-4 h-4 md:w-7 md:h-7 text-white'/>
        </div>
        <div>
          <h1 className='text-lg md:text-xl font-bold text-white'>LinkedIn</h1>
          <Link href='https://www.linkedin.com/in/nathan-fenoglio-b0a148a2' target='_blank'>
            <p className='text-base md:text-lg text-white text-opacity-70'>Nathan Fenoglio LinkedIn</p>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ContactInfo
