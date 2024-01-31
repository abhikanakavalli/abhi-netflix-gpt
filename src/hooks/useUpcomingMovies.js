import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { urlOptions } from "../utils/constants";


const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', urlOptions);


        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);

}

export default useUpcomingMovies;