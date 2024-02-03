import Image from 'next/image';
import React from 'react'

type Props = {
    icon: string;
    title: string;
    description: string;
    }
const ServiceCard = ({icon,title, description}:Props) => {
  return (
    <div
     className='flex flex-col justify-center items-center gap-4'
    >
       <div className='rounded-xl px-4 py-4  shadow-pink bg-transparent'>
        <Image src={icon} width={50} height={50} alt='icon' className='invert' />
       </div>
        <h1 className='text-xl font-bold text-white'>{title}</h1>
       <p className='text-sm  lg:text-lg max-md:text-[16px] text-center text-gray-500'>{description}</p>

    </div>
  )
}

export default ServiceCard