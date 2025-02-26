import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "../utils/movieSlice";
import configReducer from "./configSlice"
import gptReducer from "./gptSlice";
import favouriteReducer from "./favouriteSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config:configReducer,
    favourite:favouriteReducer,
  },
});
export default appStore;
