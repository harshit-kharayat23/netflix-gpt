import React from 'react'
import { MOVIE_IMAGE_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  if(!posterPath)return null;
  return (
    <div className=' w-32 md:w-48'>
      <img src={MOVIE_IMAGE_URL+posterPath} alt='movie Card' />
    </div>
  )
}

export default MovieCard
