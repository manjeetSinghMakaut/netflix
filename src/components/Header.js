import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USERLOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };


  const handleGptSearchClick = () =>{
    // toggle gpt search
    dispatch(toggleGptSearchView())

  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component un mount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 items-center">
          <button onClick={handleGptSearchClick} className="px-2 py-2 m-2 bg-gray-800 text-gray-200 rounded-xl border border-gray-700 hover:bg-gray-700 hover:text-white transition duration-200 font-medium shadow-md">
            GPT Search
          </button>
          <img
            className="w-9 h-9 rounded-xl "
            alt="user logo"
            src={user?.photoURL || { USERLOGO }} // Default avatar if no photoURL
          />
          <button onClick={handleSignOut} className="font-bold text-white ml-4">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
