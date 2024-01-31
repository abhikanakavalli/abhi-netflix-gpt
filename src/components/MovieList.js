import MovieCards from "./MovieCards"

const MovieList = ({title, movies}) => {
    if(!movies) return null;

    return(
        <div >
            <h1 className="text-white text-3xl py-4">{title}</h1>
            <div className="flex overflow-x-scroll">
            <div className="flex">
            {movies?.map(movie => <MovieCards key={movie.id} movie={movie}/>)}
            </div>
            </div>
        </div>
    )
}

export default MovieList