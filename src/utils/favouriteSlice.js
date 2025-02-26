import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        Mymovies: [],
    },

    reducers: {
        addfavouriteMovies: (state, action) => {
            state.Mymovies.push(action.payload);
        },
        deletefavouriteMovies: (state, action) => {
            state.Mymovies = state.Mymovies.filter(movie => movie.id !== action.payload.id);
        },
        clearfavouriteMovies: (state) => {
            state.Mymovies = [];
        },
    },
});

export const { addfavouriteMovies, deletefavouriteMovies, clearfavouriteMovies } = favouriteSlice.actions;
export default favouriteSlice.reducer;
