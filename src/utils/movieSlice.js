import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        videoTrailer:null
    },
    reducers: {
        addNowPLayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        movieTrailer: (state, action) => {
            state.videoTrailer = action.payload;

        }
    }
});

export const {addNowPLayingMovies, movieTrailer} = movieSlice.actions;

export default movieSlice.reducer;