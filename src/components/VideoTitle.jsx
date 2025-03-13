import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className=" w-screen aspect-video  md:pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black"> 
      <h1 className='text-2xl mt-20 md:text-3xl font-bold md:p-2'>{title}</h1>
      <p className='hidden  md:block p-2 text-md w-1/4  '>{overview}</p>
      <div>
      <button className='px-2 mx-0 p-0 py-2 my md:px-10 md:p-2 md:mx-2 my-2 bg-white rounded-md text-xl text-black hover:bg-opacity-80'> ▶ Play</button>
      <button className='hidden md:inline-block px-10 p-2 mx-2 my-2 bg-gray-500 rounded-md text-xl bg-opacity-50 hover:bg-opacity-80'>ⓘ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle