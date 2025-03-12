import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggle: false,
    movieNames:null,
    movieResults:null,

  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggle = !state.toggle;
    },
    addSearchMovies:(state,action)=>{
      const {movieNames,movieResults}=action.payload;
      state.movieNames=movieNames;
      state.movieResults=movieResults;
  },
  clearSearch(state,action){
      state.movieNames=null;
      state.movieResults-null;
  }

  },
});

export const { toggleGptSearchView ,addSearchMovies,clearSearch} = gptSlice.actions;
export default gptSlice.reducer;
