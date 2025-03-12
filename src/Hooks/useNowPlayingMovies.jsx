import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

 export const useNowPlayingMovies=()=> {

  //fetch data with tmdb api and update the store
        const nowPlayingMovies=useSelector(store=>store.nowPlayingMovies);
        const dispatch=useDispatch();
        const fetchData=async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
            const json= await data.json();

            dispatch(addNowPlayingMovies(json.results))
        }
        useEffect(()=>{
            !nowPlayingMovies && fetchData();
        },[])
}


