import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-[#141414] ">
      <div className="-mt-20 relative z-20 px-10 backdrop-blur-sm">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.PopularMovies} />

        <MovieList title={"Top Rated Movies"} movies={movies.TopRatedMovies} />

        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryConatiner;
