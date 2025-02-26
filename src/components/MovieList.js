import React, { useState, useRef} from "react";
import MovieCard from "./MovieCard";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addfavouriteMovies } from "../utils/favouriteSlice";

const MovieList = ({ title, movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const movieRefs = useRef({});

 const dispatch = useDispatch()

const handleAddtoFavourites = ()=>{
  dispatch(addfavouriteMovies(selectedMovie))
}

  return (
    <div className="py-2 overflow-hidden">
      <h1 className="text-base font-medium py-2 text-white md:text-xl mb-2 md:mb-3">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        {movies?.map((movie) => (
          <div
            key={movie.id}
            ref={(el) => (movieRefs.current[movie.id] = el)}
            onClick={() => setSelectedMovie(movie)}
            className="relative cursor-pointer"
          >
            <MovieCard posterPath={movie.poster_path} />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-3xl w-[60%] h-[25%] p-5 flex relative">
            
            {/* Left: Smaller Movie Poster */}
            <div className="w-2/5 flex items-center justify-center ">
              <img
                alt="Movie Poster"
                className="w-full h-auto max-h-[90%] object-contain rounded-3xl"
                src={IMG_CDN_URL + selectedMovie.poster_path}
              />
            </div>

            {/* Right: Movie Details */}
            <div className="w-3/5 p-4 flex flex-col justify-between ">
              <div>
                <h2 className="text-lg font-semibold mb-2">{selectedMovie.title}</h2>
                <p className="text-xs text-gray-300">
                  <strong>Release:</strong> {selectedMovie.release_date}
                </p>
                <p className="text-xs text-gray-300">
                  <strong>Rating:</strong> {selectedMovie.vote_average}
                </p>
                <p className="text-xs mt-3 leading-snug text-gray-400 line-clamp-4">
                  {selectedMovie.overview}
                </p>
              </div>
              <div className="flex flex-row justify-between">
              <button
                className="self-end mt-3 px-7 py-2 bg-slate-700 text-white text-sm font-semibold rounded-md hover:bg-green-700 transition-colors "
                onClick={()=>{handleAddtoFavourites(selectedMovie)}}
              >
                Add To Favourite
              </button>
              {/* Close Button */}
              <button
                className="self-end mt-3 px-7 py-2 bg-red-700 text-white text-sm font-semibold rounded-md hover:bg-red-800"
                onClick={() => setSelectedMovie(null)}
              >
                Close
              </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
