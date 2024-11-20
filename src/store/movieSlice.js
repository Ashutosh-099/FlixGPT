import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        landingTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addLandingTrailer: (state, action) => {
            state.landingTrailer = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addLandingTrailer, addPopularMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;