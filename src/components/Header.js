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
import { SUPPORTEDLANGUAGES } from "../utils/constants";
import { ChangeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        navigate("/error");
      }
    );
  };

  const handleGptSearchClick = () => {
    // toggle gpt search
    dispatch(toggleGptSearchView());
  };

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

  const handleLanguageChange = (e) => {
    dispatch(ChangeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black justify-between  z-10 flex flex-col md:flex-row ">
      <img className="w-40 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 items-center justify-center">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-1 md:p-2 text-sm  md:px-2 md:py-2 : m-1 bg-gray-800 text-gray-200 rounded-xl border border-gray-700 hover:bg-gray-700 hover:text-white transition duration-200 font-medium shadow-md"
            >
              {SUPPORTEDLANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGptSearchClick}
            className=" p-1 md:p-2 text-sm  md:px-2 md:py-2 : m-1 bg-gray-800 text-gray-200 rounded-xl border border-gray-700 hover:bg-gray-700 hover:text-white transition duration-200 font-medium shadow-md"
          >
            {showGptSearch? "HomePage" : "GPT-Search"}
          </button>
          <img
            className="md:w-9 md:h-9 h-6 w-6 rounded-xl ml-1 mr-1  md:ml-0 "
            alt="user logo"
            src={user?.photoURL || USERLOGO} // Default avatar if no photoURL
            />
          <button onClick={handleSignOut} className="md:font-bold text-white font-medium  md:ml-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
