import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
    return(
        <div className="px-8 md:px-24 pt-[10%] md:pt-[20%] absolute w-screen aspect-video bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-4xl font-bold text-white">{title}</h1>
            <p className="hidden md:inline-block w-1/4 text-white">{overview}</p>
            <div className="my-2">
                <button className="w-18 md:w-24 md:w-32 bg-white text-black p-2 mr-2 rounded-lg">▶ Play</button>
                <button className="hidden md:inline-block bg-opacity-20 bg-slate-100 text-white p-2 w-32 rounded-lg ">
                    <span className="flex justify-center"><CiCircleInfo className="m-1" /> More Info</span>
                    </button>
            </div>
        </div>
    )
}

export default VideoTitle