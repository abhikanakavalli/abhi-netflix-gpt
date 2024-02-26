import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const {movieNames, movieResults} = useSelector((store) => store?.gpt);
    if(!movieNames) return null;


    return(
        <div className="bg-black bg-gradient-to-r from-black to-red-950 text-white pt-[50%] md:pt-[20%]">
            <div className="">
                {movieNames?.map((movieName, index) => (
                    <MovieList key={movieName}
                        title={movieName}
                        movies={movieResults[index]}
                    />
                ))}
            </div>
        </div>
    )
}

export default GptMovieSuggestions;