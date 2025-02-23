import { createSlice } from "@reduxjs/toolkit";


const favouriteSlice = createSlice({
    name:"favourite",
    initialState:{
      Mymovies:[],
    },

    reducers:{
        addfavouriteMovies:(state,action)=>{
            state.Mymovies.push(action.payload);
        },
        deletefavouriteMovies:(state,action)=>{
            state.Mymovies.pop();
       },
       clearfavouriteMovies:(state)=>{
        state.Mymovies.length=0
       },
    },
       

});

export const { addfavouriteMovies, deletefavouriteMovies, clearfavouriteMovies } = favouriteSlice.actions;


export default favouriteSlice.reducer;