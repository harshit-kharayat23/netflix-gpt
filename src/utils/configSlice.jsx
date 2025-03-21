import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanuguage:(state,action)=>{
            state.lang=action.payload;
        }
    }
})
export const {changeLanuguage}=configSlice.actions;
export default configSlice.reducer;

