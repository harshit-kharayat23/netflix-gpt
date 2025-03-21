import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addPopularMovies} from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

 export const usePopularMovies=()=> {

  //fetch data with tmdb api and update the store
            
        const popularMovies=useSelector(store=>store.popoularMovies);
        const dispatch=useDispatch();
        const fetchData=async ()=>{
            const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
            const json= await data.json();

            dispatch(addPopularMovies(json.results))
        }
        useEffect(()=>{
            !popularMovies && fetchData();
        },[])
}


