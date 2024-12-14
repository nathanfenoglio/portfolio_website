import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>Let&apos;s Work Together!</h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe voluptates, ipsa impedit nisi doloribus.
      </p>
      {/* input fields */}
      {/* block takes up full width of container, no other element can be placed next to it */}
      <form className='mt-8 block w-full overflow-hidden'>
        {/* input fields will be side by side on medium and larger screens, otherwise stacked in a column  */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <input 
            type='text'
            placeholder='First Name'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
          <input 
            type='text'
            placeholder='Last Name'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
        </div>

        <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
          <input 
            type='email'
            placeholder='Email Address'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
          <input 
            type='text'
            placeholder='Phone Number'
            className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full'
          />
        </div>

        {/* required attribute makes the input field required and will display a message to the user if no option is selected and the form is submitted */}
        <div className='mt-5'>
          <select className='w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none' 
            defaultValue='' 
            required
          >
            <option value='' disabled>Select an option</option>
            <option value='frontend'>Frontend Development</option>
            <option value='backend'>Backend Development</option>
            <option value='fullstack'>Full Stack Development</option>
          </select>
        </div>
        <textarea
          rows={7}
          placeholder='Message'
          className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'
        />

        <div className='mt-4'>
          <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full' type='submit'>
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
