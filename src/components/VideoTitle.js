import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-14  absolute bg-gradient-to-r from-black'>
       <h1 className='text-4xl font-bold text-white '>{title}</h1>
       <p className='py-6 text-base w-2/4 text-white text-[1.4vw] leading-normal mt-[0.1vw]'>{overview}</p>
       <div className='flex gap-2 mt-4'>
       <button className='bg-white text-black  p-2  px-8 text-base rounded-md font-bold hover:opacity-80 transition duration-200'> Play</button>
       <button className='bg-gray-600 text-white  p-2 px-9 rounded-md font-semibold opacity-85 hover:opacity-60 transition duration-200 '> More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle
