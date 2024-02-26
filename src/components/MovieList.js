import MovieCards from "./MovieCards"

const MovieList = ({title, movies}) => {
    if(!movies) return null;

    return(
        <div className="m-2">
            <h1 className="text-white text-3xl py-4">{title}</h1>
            <div className="flex overflow-x-auto scrollbar-hide hover:cursor-pointer">
            <div className="flex">
                {/* overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative */}
            {movies?.map(movie => <MovieCards key={movie.id} movie={movie}/>)}
            </div>
            </div>
        </div>
    )
}

export default MovieList