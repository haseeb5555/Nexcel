import React from 'react';
import ServiceCard from './ServiceCard'; 
import {services} from '@/constants'
import Image from 'next/image';
const Services = () => {
  return (
    <div id='services' className='flex flex-col justify-start items-start gap-8 bg-[#0c0c0c] px-4 py-3 rounded-xl'> 
     <div className='flex flex-row  justify-center items-center gap-2 text-sm font-normal '>
      <Image src='/planet.png' width={25} height={25} alt='logo' />
      <h4>Services</h4>   
      </div>
    <div className='flex flex-col justify-center items-center gap-8 mt-16'>
      <h1 className="text-3xl font-bold text-white text-center">What we offer</h1>
      <p className="text-center text-gray-400">We offer a wide range of services to help you achieve your digital goals. Whether you're an entrepreneur or a business, we're here to boost your digital presence.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 space-x-8 space-y-8 max-sm:space-x-0">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
    </div>
  );

};

export default Services;
