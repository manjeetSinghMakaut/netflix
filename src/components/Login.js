import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Bgpic, USERLOGO } from "../utils/constants";
const Login = () => {
  
const dispatch = useDispatch()

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(
      name.current?.value,
      email.current.value,
      password.current.value
    );

    if (message) {
      setErrorMessage(message); // Set the error message properly
      return;
    }

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          // Update the profile with the display name
          if (name.current?.value) {
            updateProfile(user, {
              displayName: name.current.value,
              photoURL:USERLOGO,
            })
              .then(() => {
                 const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                          addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                          })
                        );
      
              })
              .catch((error) => {
                console.error("Error updating profile:", error.message);
                setErrorMessage(error.message); // Log error
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign Up Error:", errorCode, errorMessage);
          setErrorMessage(errorMessage); // Log error
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          // Only update profile if the name is provided during sign-in
          if (name.current?.value && !user.displayName) {
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USERLOGO,
            })
              .then(() => {
          // Redirect after sign-in
              })
              .catch((error) => {
                console.error("Error updating profile:", error.message);
                setErrorMessage(error.message); // Log error
              });
          } else {
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign In Error:", errorCode, errorMessage);
          setErrorMessage(errorMessage); // Log error
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="absolute">
        <img
          src={Bgpic}
          alt="logo"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute bg-black bg-opacity-70 p-16 z-10 w-full max-w-[460px] mx-auto my-20 right-0 left-0 text-white rounded"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Name"
            className="p-4 my-4 w-full rounded bg-transparent font-semibold border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full rounded bg-transparent border font-semibold border-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded bg-transparent border font-semibold border-gray-500"
        />
        <p className="text-red-600 p-1 font-semibold">{errorMessage}</p>
        <button
          type="submit"
          className="p-2 my-4 bg-red-600 hover:bg-red-800 text-white rounded w-full"
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <div className="flex justify-center my-2">
          <span className=" text-gray-400 font-bold">OR</span>
        </div>
        <p
          className="py-2 cursor-pointer border-gray-500"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="font-semibold hover:underline cursor-pointer">
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already Registered?{" "}
              <span className="font-semibold hover:underline cursor-pointer">
                Sign In Now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
