import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
