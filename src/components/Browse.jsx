import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useTrendingMovies } from '../Hooks/useTrendingMovies';
import { usePopularMovies } from '../Hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
function Browse() {
    useNowPlayingMovies();
    useTrendingMovies();
    usePopularMovies();
    const isToggle=useSelector(store=>store.gpt)
  return (
    <div>
      <Header/>{
      isToggle.toggle?<GptSearch/>: <><MainContainer/><SecondaryContainer/></>
      }
    </div>
  )
}

export default Browse
