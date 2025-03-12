import React, { useEffect, useRef } from 'react'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { API_OPTIONS, GEMNI_CDN_URL, GEMNI_KEY } from '../utils/constants';
import { addSearchMovies, clearSearch } from '../utils/gptSlice';

function GptSearchBar() {
  const currentLang=useSelector(store=>store.config.lang)
  const searchTxt=useRef(null);

  // fetch movie from TMDB API
  const dispatch=useDispatch();
  const searchMovieTMDB=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query=%22The%20'+
        movie +
        '%22&include_adult=false&language=en-US&page=1',API_OPTIONS)
       const json=await data.json();
       return json.results; 
  }

  const handleGptSearchClick=async()=>{

    const gptQuery="Act as a movie Recommendation System and suggest me 5 name of  movies comma separated for the query "+searchTxt.current.value+"just give me movie name no explaination"

    const gemiResponse= await axios({
      url:GEMNI_CDN_URL+GEMNI_KEY,
      method:"post",
      data:{
        "contents": [{
          "parts":[{"text":gptQuery}]
          }]
      }
    })
    const gemniMovies=gemiResponse?.data?.candidates[0]?.content.parts[0]?.text.split(',');
    console.log(gemniMovies);

    const promiseArray=gemniMovies.map((movie)=>searchMovieTMDB(movie))
    // [promise,promise,promise]
      const tmdbResults=await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addSearchMovies({movieNames:gemniMovies,movieResults:tmdbResults}));
    

  }
  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  
  
  return (
    <div className='  pt-[10%] flex justify-center '>
        <form  className=' bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchTxt} type='text' className='p-4 m-4 col-span-9' placeholder={lang[currentLang].gptSearchPlacHolder}/> 
            <button onClick={handleGptSearchClick} className='p-2 m-2 bg-red-500 text-white rounded-lg col-span-3'>{lang[currentLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
