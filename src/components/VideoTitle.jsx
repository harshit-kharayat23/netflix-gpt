import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black"> 
      <h1 className='text-5xl font-bold  '>{title}</h1>
      <p className='p-4 text-lg w-1/4  '>{overview}</p>
      <div>
      <button className='px-12 p-4 mx-2 bg-white rounded-md text-xl text-black hover:bg-opacity-80'> ▶ Play</button>
      <button className='px-12 p-4 mx-2 bg-gray-500 rounded-md text-xl bg-opacity-50 hover:bg-opacity-80'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle