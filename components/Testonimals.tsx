import Image from 'next/image'
import React from 'react'

const Testonimals = () => {
  return (
    <section className='relative flex justify-start items-start gap-8 bg-pink-950 rounded-xl px-4 py-12 mt-10 max-md:flex-col max-md:w-full '>

      <div className='flex flex-row  justify-center items-center gap-2 text-sm font-normal lg:hidden'>
        <Image src='/planet.png' width={25} height={25} alt='logo' />
        <h4>Testimonials</h4>
      </div>
      <div className=' w-[30%] max-md:w-full'>
        <Image src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80' alt='profile' height={200} width={200} className=' absolute -top-8 rounded-xl z-10 max-md:hidden'/>
       
 
      </div>
        <div className='flex flex-col gap-4 w-[70%] max-md:w-full'>
         
          <p className='w-full'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, cupiditate voluptatum veniam sequi ipsa facere corporis quae at ab rerum enim voluptate architecto dicta consequuntur accusantium soluta, esse ex.</p>
          <h3 className='text-2xl font-bold'>John Doe</h3>
          <p className='text-sm'>CEO, Company</p>
         
         

         
        </div>

    </section>
    
  )
}

export default Testonimals