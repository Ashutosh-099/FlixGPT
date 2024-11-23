import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import langConfigReducer from "./LangConfigSlice";
import gptMovieReducer from "./gptMovieSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    langConfig: langConfigReducer,
    gptMovie: gptMovieReducer,
  },
});

export default appStore;
