import React from "react";
import MovieCard from "./MovieCard";

// Ensure the name matches the file exactly

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-4 py-2">
      <h1 className="text-2xl font-medium py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll "> 
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
