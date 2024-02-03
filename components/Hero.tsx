"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
const Hero = () => {

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <section className='mt-16 w-full flex justify-start items-start gap-4 h-screen max-md:flex-col'>
 
      <motion.div className='w-[50%] flex flex-col justify-start items-start rounded-md gap-4 max-md:w-full bg-[#0c0c0c]  px-6 py-6'
         variants={textVariants}
         initial="hidden"
         animate="visible"
      
      >

        <Image src='/planet.png' width={25} height={10} alt='logo' />
        <motion.h1
          className='text-[52px] font-bold leading-[60px] max-sm:text-[36px] max-sm:leading-[44px] '
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Innovate and Elevate with Software Experts✨
        </motion.h1>
        <motion.p
          className='text-xl text-gray-500 max-sm:text-[18px]'
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Elevate your digital aspirations with our proficient team of designers and engineers. We fuse innovation and expertise, sculpting your concepts into refined, top-tier solutions.
        </motion.p>
         <button className='  border-[6px] border-pink-950 px-4 py-3 rounded-full hover:bg-pink-950'>
         Get started
         </button>
      </motion.div>
        <motion.div className='w-[50%] flex justify-center items-center shadow-pink px-8 py-[89px] max-md:py-16 rounded-md max-md:w-full max-md:h-full' 
           variants={textVariants}
           initial="hidden"
           animate="visible"
        
        >
         <Image src='/hero.jpg' width={700} height={700} className='rounded-xl ' alt='hero' />
        </motion.div>
    </section>
  )
}

export default Hero