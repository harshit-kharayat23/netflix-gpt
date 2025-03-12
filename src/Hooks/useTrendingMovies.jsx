import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addTrendingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

 export const useTrendingMovies=()=> {

  //fetch data with tmdb api and update the store
        const trendingMovies=useSelector(store=>store.trendingMovies)
        const dispatch=useDispatch();
        const fetchData=async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
            const json= await data.json();

            dispatch(addTrendingMovies(json.results))
        }
        useEffect(()=>{
            !trendingMovies && fetchData();
        },[])
}


