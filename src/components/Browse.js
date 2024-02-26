import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainConatiner.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage.js";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const gptStore = useSelector((store) => store?.gpt);

    return(
        <div className="w-screen ">
            <Header/>
            {gptStore?.gptSearch ? 
                <GptSearchPage/>:
                <>
                 <MainContainer/>
                 <SecondaryContainer/>
                </>
        }
        </div>
    )
}

export default Browse