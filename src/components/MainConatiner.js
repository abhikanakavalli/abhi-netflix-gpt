import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);

    if(!movies) return null;

    const {id, title, overview} = movies[0];
    
    return(
        <div className="pt-[20%] md:p-0 bg-black">
            <VideoTitle  title={title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer