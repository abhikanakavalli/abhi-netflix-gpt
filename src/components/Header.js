import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { netflixLogo } from "../utils/constants.js";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

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
            navigate('/');
            // Sign-out successful.
          }).catch((error) => {
            navigate('/error');
            // An error happened.
          });
    }
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img src= {netflixLogo}
            alt='no-title-img'
            className="w-40"
            />
        {user &&
        <div className=" flex">
            <img src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
             alt='no-prog-img'
             className="w-12 m-2"
             />
            <button className="bg-red-600 text-white w-24 h-6 mt-6  cursor-pointer" onClick={handleSignOut}>Sign Out</button>
        </div>
        }
        </div>
    )
}

export default Header