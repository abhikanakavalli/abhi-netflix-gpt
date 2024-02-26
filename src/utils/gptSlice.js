import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        gptSearch: false,
        language: 'en',
        movieNames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptSearch: (state, action) => {
            state.gptSearch = !state.gptSearch;
        },
        addGptMovies: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        selectedLanguage: (state, action) => {
            state.language = action.payload;
        }

    }
    
})

export const {toggleGptSearch, addGptMovies, selectedLanguage} = gptSlice.actions;

export default gptSlice.reducer;