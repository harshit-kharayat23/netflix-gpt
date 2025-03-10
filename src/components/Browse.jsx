import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useTrendingMovies } from '../Hooks/useTrendingMovies';
import { usePopularMovies } from '../Hooks/usePopularMovies';
function Browse() {
    useNowPlayingMovies();
    useTrendingMovies();
    usePopularMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    
    </div>
  )
}

export default Browse
