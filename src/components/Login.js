import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bg_img_url } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const[emailMsg, setEmailMsg] = useState(null);
    const [passwordMsg, setPasswordMsg] = useState(null);
    const [errMsg, setErrMsg] = useState(null);
    const dispatch = useDispatch();
    const navigate= useNavigate();

    const toggleSignInBtn = () => {
        setErrMsg(null);
        setIsSignInForm(!isSignInForm);
    };

    const email = useRef();
    const password = useRef();
    const name = useRef();

    const handleSubmit = () => {
        const msg = checkValidate({email: email.current.value, password: password.current.value});
        console.log(msg);

        if(!isSignInForm){
            //sign UP func
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                    navigate('/browse');
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    setErrMsg(error.message)
                    // An error occurred
                    // ...
                  });
                  
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrMsg(errorMessage)
                  // ..
                });
        }else{
            // sign in func 
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  navigate('/browse')
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrMsg(errorMessage);
                });
        }
    }


    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src={bg_img_url}
                className="h-screen object-cover md:h-full"
                alt='no-bg-img'/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 w-full md:w-3/12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80">
                <h1 className="font-semibold text-white text-2xl p-2 m-2">
                    {isSignInForm? "Sign In": "Sign Up"}
                </h1>
                {!isSignInForm &&
                <input ref={name} type='text' placeholder="Full Name" className="text-white bg-transparent w-full p-4 m-2 rounded-sm border border-gray-100"/>
                }
                <input ref={email} type='text' placeholder="Email or Phone number" className="text-white bg-transparent w-full p-4 m-2 rounded-sm border border-gray-100"/>
                <input ref={password} type='password' placeholder="Password" className="text-white bg-transparent w-full p-4 m-2 rounded-sm border border-gray-100"/>
                <p className="text-red-700 ">{errMsg}</p>
                <button className="text-white bg-red-700 w-full p-2 m-2 rounded-sm"
                    onClick={handleSubmit}
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