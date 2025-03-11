import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black"> 
      <h1 className='text-3xl font-bold  p-2'>{title}</h1>
      <p className='p-2 text-md w-1/4  '>{overview}</p>
      <div>
      <button className='px-10 p-2 mx-2 my-2 bg-white rounded-md text-xl text-black hover:bg-opacity-80'> ▶ Play</button>
      <button className='px-10 p-2 mx-2 my-2 bg-gray-500 rounded-md text-xl bg-opacity-50 hover:bg-opacity-80'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle