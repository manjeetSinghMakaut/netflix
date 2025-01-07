import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="md:bg-[#141414] bg-black ">
      <div className="  -mt-3  backdrop-blur-sm md:-mt-16 relative z-20 md:px-10 px-6 md:backdrop-blur-sm">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.PopularMovies} />

        <MovieList title={"Top Rated Movies"} movies={movies.TopRatedMovies} />

        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryConatiner;
