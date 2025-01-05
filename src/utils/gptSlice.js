import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    MovieResults: null,
    MovieNames: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResult: (state, action) => {
      const { MovieNames, MovieResults } = action.payload;
      state.MovieNames = MovieNames;
      state.MovieResults = MovieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
