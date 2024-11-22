import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import langConfigReducer from "./LangConfigSlice";

const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    langConfig: langConfigReducer,
  },
});

export default appStore;
