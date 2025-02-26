import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moviecard from './MovieCard';
import { deletefavouriteMovies, clearfavouriteMovies } from '../utils/favouriteSlice';
import Header from './Header';

const FavouriteMovies = () => {
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.favourite.Mymovies || []);

    return (
        <div className="bg-black min-h-screen">
            <Header />
            <h2 className="text-xl font-bold text-white mb-3 pt-20 flex justify-center">
                Favorite Movies
            </h2>
            {/* Reset Button Positioned to Right */}
            <div className="flex justify-end px-10">
                <button 
                    className="bg-red-600 text-white px-6 py-2 rounded-md text-sm hover:bg-red-700 transition"
                    onClick={() => dispatch(clearfavouriteMovies())} 
                >
                    Reset
                </button>
            </div>

            {favourites.length === 0 ? (
                <p className="text-gray-400 flex justify-center pt-60">
                    No favorite movies added yet.
                </p>
            ) : (
                <div className="flex flex-row gap-4 flex-wrap bg-black mt-24 pl-10 pr-5">
                    {favourites.map((movie) => (
                        <div key={movie.id} className="relative flex flex-col rounded-md">
                            <Moviecard posterPath={movie.poster_path} />
                            <button
                                className="absolute bottom-0 bg-red-600 text-white px-10 py-1 rounded-md text-sm"
                                onClick={() => dispatch(deletefavouriteMovies({ id: movie.id }))} 
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavouriteMovies;
