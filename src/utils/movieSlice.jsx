import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            movieTrailer:null,
            trendingMovies:null,
            popoularMovies:null,


            
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addMovieTrailer:(state,action)=>{
                state.movieTrailer=action.payload;
            },
            addTrendingMovies:(state,action)=>{
                state.trendingMovies=action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popoularMovies=action.payload;
            },
            
            
        }
    }
)
export const {addNowPlayingMovies,addMovieTrailer,addTrendingMovies,addPopularMovies}=movieSlice.actions
export default movieSlice.reducer;