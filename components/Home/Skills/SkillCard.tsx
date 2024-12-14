import Image from 'next/image';
import React from 'react'

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    invert: number;
  }
}

const SkillCard = ({skill}: Props) => {
  // destructure skill object
  const {image, invert, title} = skill;
  return (
    <div className='p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900 h-full flex flex-col justify-between'>
      {/* sometimes you want to invert the image colors so added the invert property to skillsData to be able to control per skill */}
      <Image src={image} alt={title} width={80} height={80} className='mx-auto object-cover' style={{ filter: invert === 1 ? "invert(1) grayscale(1) brightness(2)" : "none" }}/>
      <h1 className='text-[18px] mt-4 text-white font-[600]'>{title}</h1>
    </div>
  )
}

export default SkillCard
