import { useEffect } from "react";
import { addNowPLayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { urlOptions } from "../utils/constants";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', urlOptions)
        const json = await data.json();
        dispatch(addNowPLayingMovies(json.results))
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;