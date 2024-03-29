import { img_card_url } from "../utils/constants"

const MovieCards = ({movie}) => {

    if(!movie?.poster_path) return null;
    
    return(
        <div className="w-36 mr-2">
            <img alt='cards-img-no'
                src={img_card_url + movie?.poster_path}
            />
        </div>
    )
}

export default MovieCards