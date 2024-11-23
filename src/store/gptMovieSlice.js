import { createSlice } from "@reduxjs/toolkit";

const gptMovieSlice = createSlice({
    name: "gptMovie",
    initialState: {
        suggestions: null,
        movieResults: null,
    },
    reducers: {
        addGptMovieResults: (state, action) => {
            const { suggestions, results } = action.payload;
            state.suggestions = suggestions;
            state.movieResults = results;
        },
        clearGptMovie: (state) => {
            state.suggestions = null;
            state.movieResults = null;
        }
    }
});

export const { addGptMovieResults, clearGptMovie } = gptMovieSlice.actions;
export default gptMovieSlice.reducer;