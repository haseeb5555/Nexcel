import React from 'react'
import GetInTouchBtn from './GetInTouchBtn'

const GetStarted = () => {
  return (
    <div
     className='w-full flex justify-start items-start gap-16 bg-pink-950 rounded-xl px-4 py-3 mb-6 lg:py-8'
    >
    <div className='w-full flex flex-col justify-center items-start  gap-2 px-20 max-sm:px-0 lg:mt-4'>
        <h1 className='text-xl font-bold'>Get Started</h1>
        <p className='text-sm text-gray-500'>Are you ready to revolutionise your digital landscape?</p>
    </div>
     <GetInTouchBtn/>
    </div>
  )
}

export default GetStarted