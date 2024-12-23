import React from "react";
import { lang } from "../utils/languageconstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const languageKey = useSelector((store) => store.config.lang.toLowerCase());

  return (
    <div className="flex justify-center items-center">
      <form className="bg-black flex flex-col sm:flex-row items-center p-3 w-[50%] rounded-lg shadow-lg mt-[12%]">
        <input
          type="text"
          className="p-2 flex-grow border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500"
          placeholder={lang[languageKey].gptsearchPlaceholder}
        />
        <button className="py-2 px-6 bg-red-800 text-white rounded-lg ml-2">
         {lang[languageKey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
  