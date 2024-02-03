"use client"

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { buttonVariants } from '@/lib/utils';

const AboutUs = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionOffset= document.getElementById('about-us')?.offsetTop;


      // You can adjust the offset value based on when you want the animation to trigger
      if (scrollY > sectionOffset - 200) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.section
      id='about-us'
      className='flex flex-col justify-start items-start gap-12 text-[32px] leading-[55px] text-center font-bold bg-[#0c0c0c] px-4 py-3 rounded-xl  max-md:mt-80 max-md:text-[26px] max-md:leading-10 max-sm:text-[20px] max-sm:leading-8'
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className='flex flex-row  justify-center items-center gap-2 text-sm font-normal '>
        <Image src='/planet.png' width={25} height={25} alt='logo' />
        <h4>About Us</h4>
      </div>
      <p className='px-8 mt-10 max-md:px-0'>
        we're not just a tech services company. We're a team of creative UI-UX designers and skilled engineers dedicated to bringing your digital visions to life. We're passionate about technology and creativity, crafting immersive digital experiences. Whether you're an entrepreneur or a business, we're here to boost your digital presence. Welcome to Vonterra, where innovation and imagination shape your digital future
      </p>
      <Link href="/contact" >
      <motion.button
      className="flex gap-2 px-8 py-6 max-md:w-full bg-pink-950 rounded-md text-white font-medium transition-all duration-500 ease-out hover:bg-pink-900 hover:text-black"
      variants={buttonVariants}
      whileHover="hover"
      transition={{ duration: 0.3 }} // Adjust the duration as needed
    >
      Get in touch <ArrowUpRight size={24} />
    </motion.button>
    </Link>
    </motion.section>
  );
};

export default AboutUs;
