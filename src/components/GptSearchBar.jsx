import React from 'react'
import { lang } from '../utils/languageConstants'
import { useSelector } from 'react-redux'

function GptSearchBar() {
  const currentLang=useSelector(store=>store.config.lang)
  return (
    <div className='  pt-[10%] flex justify-center '>
        <form className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[currentLang].gptSearchPlacHolder}/> 
            <button className='p-2 m-2 bg-red-500 text-white rounded-lg col-span-3'>{lang[currentLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
