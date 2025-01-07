import React from "react";
import MovieCard from "./MovieCard";

// Ensure the name matches the file exactly

const MovieList = ({ title, movies }) => {

  return (
    <div className=" py-2 overflow-hidden ">
      <h1 className="text-base font-medium py-2 text-white md:text-xl mb-2 md:mb-3 ">{title}</h1>
      <div className="flex overflow-x-scroll "> 
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
