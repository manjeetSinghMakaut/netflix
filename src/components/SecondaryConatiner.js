import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black ">
      <div className="-mt-32 relative z-20 px-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.PopularMovies} />

        <MovieList title={"Top Rated Movies"} movies={movies.TopRatedMovies} />

        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryConatiner;
