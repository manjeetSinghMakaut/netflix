import React, { useRef } from "react";
import { lang } from "../utils/languageconstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang.toLowerCase());
  const SearchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in tmdb
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // making a api call to opengptapi and get movies result

    const GptQuery =
      "Act as a Movies Recomandation system And suggest some Movies" +
      SearchText.current.value +
      "only give me Names 5 Movies , comma separated like the example result given ahead. example Result:gadar,sholay , don,robot,golmaal,koi mil gaya";
    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: GptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!GptResults.choices) {
      //to something to handle error
    }

    const gptMovies = GptResults.choices?.[0]?.message?.content.split(",");
    console.log(gptMovies);

    // for each movie i will search in TMDB API
    const promiseArray = gptMovies.map((moviee) => searchMovieTmdb(moviee));

    // RESULT= [PROMISE,PROMISE,PROMISE,PROMISE,PROMISE]

    const tmdbResult = await Promise.all(promiseArray);

    console.log(tmdbResult);

    dispatch(
      addGptMoviesResult({ MovieNames: gptMovies, MovieResults: tmdbResult })
    );
  };

  return (
    <div className="flex justify-center items-center align-middle  overflow-hidden">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black flex sm:flex-row items-center p-3 w-[90%] sm:w-[50%] rounded-lg shadow-lg mt-[12%] flex-row"
      >
        <input
          ref={SearchText}
          type="text"
          className="p-1 md:p-2 w-52 md:flex-grow border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-50"
          placeholder={lang[languageKey].gptsearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-1 md:py-2 px-3  md:px-5 w-auto bg-red-800 text-white rounded-lg ml-1 "
        >
          {lang[languageKey].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
