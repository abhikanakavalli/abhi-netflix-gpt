import { bg_img_url } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return(
        <>
        <div className="absolute -z-10">
                <img src={bg_img_url}
                className="h-screen object-cover md:h-auto"
                alt='no-bg-img'/>
        </div>
        <div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
        </>
    )
}

export default GptSearchPage;