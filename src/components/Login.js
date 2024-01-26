import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInBtn = () => {
        setIsSignInForm(!isSignInForm);
    };

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_small.jpg'
                alt='no-bg-img'/>
            </div>
            <form className="absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80">
                <h1 className="font-semibold text-white text-2xl p-2 m-2">
                    {isSignInForm? "Sign In": "Sign Up"}
                </h1>
                {!isSignInForm &&
                <input type='text' placeholder="Full Name" className="text-white bg-transparent w-full p-4 m-2 rounded-sm border border-gray-100"/>
                }
                <input type='text' placeholder="Email or Phone number" className="text-white bg-transparent w-full p-4 m-2 rounded-sm border border-gray-100"/>
                <input type='password' placeholder="Password" className="text-white bg-transparent w-full p-4 m-2 rounded-sm border border-gray-100"/>
                <button className="text-white bg-red-700 w-full p-2 m-2 rounded-sm"
                >
                    {isSignInForm? "Sign In": "Sign Up"}
                </button>
                <p className="text-white m-2" onClick={toggleSignInBtn}>
                {isSignInForm? "New to Netflix? Sign up now": "Already registered? Sign In Now"}
                </p>
            </form>
            
        </div>
    )
}

export default Login