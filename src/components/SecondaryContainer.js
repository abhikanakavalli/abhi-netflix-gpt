import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
    const movieStore = useSelector((store) => store?.movie);
    if(!movieStore) return null;

    return(
        <div className="px-2 bg-black w-screen">
            <div className="mt-0 md:-mt-52   relative z-20">
            <MovieList title={'Now Playing'} movies={movieStore?.nowPlayingMovies}/>
            <MovieList title={'Popular'} movies={movieStore?.popularMovies}/>
            <MovieList title={'Top Rated'} movies={movieStore?.topRatedMovies}/>
            <MovieList title={'Up Coming'} movies={movieStore?.upcomingMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer