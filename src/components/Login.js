import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="relative h-screen ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
          className="absolute w-full h-full object-cover"
        />
          
          <div className="absolute w-full h-full bg-black bg-opacity-60"></div>
 


        <form className="absolute bg-black bg-opacity-70 p-16  z-10 w-full max-w-[460px] mx-auto my-20 right-0 left-0 text-white rounded ">
          {" "}
          <h1 className="text-3xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Enter Name"
              className="p-4 my-4 w-full rounded bg-transparent font-semibold border border-gray-500"
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 my-2 w-full rounded bg-transparent border font-semibold border-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 my-2 w-full rounded bg-transparent border font-semibold border-gray-500"
          />
          <button className="p-2 my-4 bg-red-600 hover:bg-red-800 text-white rounded w-full">
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <div className="flex justify-center my-2">
            <span className=" text-gray-400 font-bold">OR</span>
             
          </div>
          <p
            className="py-2 cursor-pointer  border-gray-500"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? (
              <>
                New to Netflix? <span className="font-semibold hover:underline cursor-pointer">Sign Up Now</span>
              </>
            ) : (
              <>
                Already Registered?{" "}
                <span className="font-semibold  hover:underline cursor-pointer">Sign In Now</span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
