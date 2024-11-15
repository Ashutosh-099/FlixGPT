import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: undefined,
        landingTrailer: undefined,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addLandingTrailer: (state, action) => {
            state.landingTrailer = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addLandingTrailer } = movieSlice.actions;
export default movieSlice.reducer;