import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestions = () => {
  const { MovieNames, MovieResults } = useSelector((store) => store.gpt);

  if (!MovieNames) return null;

  return (
    <div className=" p-8 md:p-14  rounded-3xl text-white font-semibold overflow-x-auto bg-gray-950 bg-opacity-50 backdrop-blur-lg ">
      <div className="">
        {MovieNames.map((movieName,index) => (
          <MovieList
            key={movieName}
            title={movieName.toUpperCase()}
            movies={MovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestions;
