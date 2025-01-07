import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[30%] md:pt-[20%] px-7 md:px-14  absolute bg-gradient-to-r from-black'>
       <h1 className='text-2xl  md:text-4xl font-bold text-white '>{title}</h1>
       <p className='py-6 text-base w-2/4 text-white text-[1.4vw] leading-normal mt-[0.1vw] hidden md:inline-block'>{overview}</p>
       <div className='flex gap-2 mt-4'>
       <button className='bg-white text-black p-1 md:py-2 px-4 md:px-8 md:text-lg text-sm rounded-md font-bold hover:opacity-80 transition duration-200'> Play</button>
       <button className='bg-gray-600 text-white p-1 md:text-lg text-base md:p-2 md:px-9 rounded-md font-semibold  opacity-85 hover:opacity-60 transition duration-200 '> More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle
