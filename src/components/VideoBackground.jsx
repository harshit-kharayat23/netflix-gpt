import React from 'react'
import { useMovieVideos } from '../Hooks/useMovieVideos'
import { useSelector } from 'react-redux';


function VideoBackground({movieId}) {
    
    useMovieVideos(movieId);
    const trailerVideo=useSelector(store=>store.movies?.movieTrailer);
    
  return (
    <div className='w-screen'>
      <iframe  className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=9EoKFjJCCXOQcARp"+"&autoplay=1&mute=1"}
      title="YouTube video player" 
     
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground
