import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieTrailer } from "../utils/movieSlice";
import { urlOptions } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const movieTrailers = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId +'/videos?language=en-US', urlOptions);
        const json = await data.json();
        const filterData = json?.results?.filter((video) => video.type= 'Trailer');
        const trailer = filterData.length === 0? filterData[0]: json?.results[0];
        dispatch(movieTrailer(trailer));
    }

    useEffect(() => {
        movieTrailers();
    }, []);
}

export default useMovieTrailer;