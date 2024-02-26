import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { netflixLogo, supported_lang } from "../utils/constants.js";
import { addGptMovies, selectedLanguage, toggleGptSearch } from "../utils/gptSlice.js";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store?.user);
    const showGptSearch = useSelector((store) => store?.gpt?.gptSearch);
    const langStore = useSelector((store) => store?.gpt?.language);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
              // User is signed out
            }
          });
          //Unsubscribed while component is unmount
          return () => unSubscribe();
    },[]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(toggleGptSearch());
            dispatch(addGptMovies({movieNames:null, movieResults:null}));
            navigate('/');
            // Sign-out successful.
          }).catch((error) => {
            navigate('/error');
            // An error happened.
          });
    };

    const handleGptToggle = () => {
        dispatch(toggleGptSearch());
        dispatch(addGptMovies({movieNames:null, movieResults:null}));
        dispatch(selectedLanguage('en'));
    };

    const handleLanguage = (e) => {
        dispatch(selectedLanguage(e.target.value));
    }

    return(
        <div className="absolute px-0 md:px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex md:flex-row justify-between">
            <img src= {netflixLogo}
            alt='no-title-img'
            className="w-32 md:w-40  md:mx-0 mt-2"
            />
        {user &&
        <div className="flex">
            {showGptSearch &&
            <select className="p:0 md:p-1 rounded-md bg-gray-700 text-white mt-6 mr-2 md:mt-6" onChange={handleLanguage}>
                {supported_lang?.map(lang => <option key={lang.id} value={lang.id}>{lang.name}</option>)}
            </select>
            }
            {showGptSearch? <IoMdHome className="bg-blue-800 mr-3 mt-7 size-8 md:hidden rounded-md"
                onClick={handleGptToggle}
            />: <FaSearch className="bg-blue-800 mr-4 mt-6 size-8 md:hidden rounded-md" 
                    onClick={handleGptToggle}
            />
            }
            
            <button onClick={handleGptToggle}
                className="hidden md:inline-block mt-2 md:mt-6 mr-4 h-12 bg-violet-700 text-white rounded-lg">
                    {showGptSearch? '🏡Home Page': 'GPT Search🔍'}
            </button>
            <img src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
             alt='no-prog-img'
             className="w-12 mt-6 mr-4 hidden md:inline-block"
             />
            <button className="bg-red-600 text-white w-16 md:w-24 h-6 mt-6 mr-1 cursor-pointer rounded-md" onClick={handleSignOut}>Sign Out</button>
        </div>
        }
        </div>
    )
}

export default Header