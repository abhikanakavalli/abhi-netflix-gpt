import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        videoTrailer:null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPLayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        movieTrailer: (state, action) => {
            state.videoTrailer = action.payload;

        }
    }
});

export const {addNowPLayingMovies, movieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;