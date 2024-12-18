import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24  absolute bg-gradient-to-r from-black'>
       <h1 className='text-3xl font-bold text-white '>{title}</h1>
       <p className='py-6 text-base w-1/4 text-white'>{overview}</p>
       <div className='flex gap-2'>
       <button className='bg-white text-black  p-2 px-8 rounded-md font-bold hover:opacity-70'> Play</button>
       <button className='bg-gray-600 text-white  p-2 px-9 rounded-md font-semibold opacity-85'>More Info</button>
       </div>

    </div>
  )
}

export default VideoTitle
