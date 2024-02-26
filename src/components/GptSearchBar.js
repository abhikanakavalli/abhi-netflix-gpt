import { useDispatch, useSelector } from "react-redux";
import { Audio } from 'react-loader-spinner'
import { bg_img_url, urlOptions } from "../utils/constants";
import { langConstants } from "../utils/languageConstants.js";
import { useRef } from "react";
import openai from "../utils/openai.js";
import { addGptMovies } from "../utils/gptSlice.js";

const GptSearchBar = () => {
    const lang = useSelector(store => store?.gpt?.language);

    const dispatch = useDispatch();

    const search = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + 
            movie + 
            '&include_adult=false&language=en-US&page=1', urlOptions);
        const json = await data.json();
        console.log('json', json);
        return json.results;

    }

    const handleSearch = async () => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
            search.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: RRR, Bahubali, Don, Master, salaar";
        
        const gptSearch = await openai.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-3.5-turbo',
        });

        if(!gptSearch?.choices){
            //Todo: write Error Handling
        }

        const gptMovies = gptSearch?.choices?.[0]?.message?.content?.split(",");

        if(gptMovies.length === 0) return(
            <div className="text-white text-3xl">Loading...</div>
        );

        //For each movie i will search TMDB API
        const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie)); 
        //[promise, promise, promise, promise, promise] ;

        const tmdbResults = await Promise.all(promiseArray);

        if(tmdbResults.length === 0) return(
            <div className="text-white text-3xl">Loading...</div>
        );
        console.log(gptMovies, tmdbResults);

        dispatch(
            addGptMovies({movieNames: gptMovies, movieResults: tmdbResults})
            );
    };

    return(
        <div className="flex justify-center">
            <form className="pt-[40%] md:pt-[10%] grid grid-cols-12  w-1/2 p-2 absolute" onSubmit={(e) => e.preventDefault()}>
                <input type='text' placeholder={langConstants[lang]?.placeholderTxt}
                    ref={search}
                    className="col-span-8 md:col-span-9 outline-double mr-2 p-2 bg-opacity-80 rounded-sm"

                />
                <button className="col-span-4 md:col-span-3 bg-red-700 text-white rounded-sm"
                    onClick={handleSearch}    
                >{langConstants[lang]?.name}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;