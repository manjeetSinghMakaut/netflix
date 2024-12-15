import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");  // Redirect to login page after sign out
      })
      .catch((error) => {
        console.error("Sign out error:", error);
        // Optionally, you can navigate to an error page or show an alert
        // navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 items-center">
          {/* Display the user's photoURL or a fallback image */}
          <img
            className="w-12 h-12 rounded-full"
            alt="user icon"
            src={user?.photoURL || "https://www.example.com/default-avatar.png"}  // Replace with a fallback image URL
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white ml-4"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
