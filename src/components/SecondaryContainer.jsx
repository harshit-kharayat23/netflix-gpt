import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {

  const moviesList=useSelector(store=>store.movies)
  
  return (
    <div className='bg-black pl-12'>
    <div className='-mt-52 relative z-20 pl-2'>
      <MovieList title="Now Playing" movies={moviesList.nowPlayingMovies}/>
      <MovieList title="Popular Movies" movies={moviesList.popularMovies}/>
      <MovieList title="Trending" movies={moviesList.trendingMovies}/>
    
      </div>
    </div>
  )
}

export default SecondaryContainer
