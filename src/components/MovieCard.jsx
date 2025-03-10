import React from 'react'
import { MOVIE_IMAGE_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div className='w-48'>
      <img src={MOVIE_IMAGE_URL+posterPath} alt='movie Card' />
    </div>
  )
}

export default MovieCard
