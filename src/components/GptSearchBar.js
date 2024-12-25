import React, { useRef } from "react";
import { lang } from "../utils/languageconstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang.toLowerCase());
  const SearchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(SearchText.current.value);
    // making a api call to opengptapi and get movies result

    const GptQuery =
      "Act as a Movies Recomandation system And suggest some Movies" +
      SearchText.current.value +
      "only give me Names 5 Movies , comma separated like the example result given ahead. example Result:gadar,sholay , don,robot,golmaal,koi mil gaya";

    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!GptResults.choices){
      //to something to handle error
    }

    console.log(GptResults.choices[0]?.message?.content);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black flex flex-col sm:flex-row items-center p-3 w-[50%] rounded-lg shadow-lg mt-[12%]"
      >
        <input
          ref={SearchText}
          type="text"
          className="p-2 flex-grow border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-500"
          placeholder={lang[languageKey].gptsearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-6 bg-red-800 text-white rounded-lg ml-2"
        >
          {lang[languageKey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
