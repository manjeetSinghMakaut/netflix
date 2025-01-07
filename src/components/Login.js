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
import { USERLOGO } from "../utils/constants";
import LoginFooter from "./LoginFooter";
import { Bgpic } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
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
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (name.current?.value) {
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USERLOGO,
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
                setErrorMessage(error.message);
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign Up Error:", errorCode, errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
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
                setErrorMessage(error.message);
              });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Sign In Error:", errorCode, errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    if (name.current) name.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gray-100 overflow-x-hidden">
      <Header />

      <div
        className="absolute inset-0 z-0 bg-cover bg-center  "
        style={{
          backgroundImage: `url(${Bgpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed", // Fix the background in place
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-black opacity-45" // Black overlay with opacity
      ></div>

      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-75 p-16 md:p-16 z-10 w-full md:max-w-[460px] mx-auto mt-24 text-white rounded-lg"
      >
        <h1 className="text-2xl md:text-3xl font-bold py-4 ">
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
          className="md:p-4 p-2 my-2 w-full rounded bg-transparent border font-semibold border-gray-500"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="md:p-4 p-2 my-2 w-full rounded bg-transparent border font-semibold border-gray-500"
        />

        <p className="text-red-600 p-1 font-semibold">{errorMessage}</p>

        <button
          type="submit"
          className="md:p-4 p-2 my-4 bg-red-600 hover:bg-red-800 text-white rounded w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-center my-2">
          <span className="text-gray-400 font-bold">OR</span>
        </div>

        <p
          className="py-2 cursor-pointer border-gray-500 text-center"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <span className="font-semibold text-sm md:text-lg hover:underline cursor-pointer">
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already Registered?{" "}
              <span className="font-semibold text-sm md:text-lg  hover:underline cursor-pointer">
                Sign In Now
              </span>
            </>
          )}
        </p>
      </form>

      <LoginFooter />
    </div>
  );
};

export default Login;
