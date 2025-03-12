import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addMovieTrailer } from '../utils/movieSlice';
import { useDispatch, useSelector} from 'react-redux';
export const  useMovieVideos=(movieId)=>{
// fetch trailer video and updating the store with the trailer video
    const movieTrailer=useSelector(store=>store.movieTrailer)
     const dispatch=useDispatch();
    
    const fetchMovieTrailer=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',API_OPTIONS);
        const json=await data.json();

        const filterData =json.results.filter(video=> video.type==="Trailer")
        const trailer=filterData.length?filterData[0]:json.results[0]

        dispatch(addMovieTrailer(trailer));
    }
    useEffect(()=>{
         !movieTrailer && fetchMovieTrailer();
    },[])
}  
 
