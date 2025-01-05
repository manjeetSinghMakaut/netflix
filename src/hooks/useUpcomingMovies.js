
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();


    const UpcomingMovies = useSelector(
      (store) => store.movies.UpcomingMovies
    );


    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await data.json();
  
      dispatch(addUpcomingMovies(json.results));
    };
  
    useEffect(() => {
      !UpcomingMovies && getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies
