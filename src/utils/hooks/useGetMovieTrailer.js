import { useEffect } from "react";
import { API_OPTIONS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addLandingTrailer } from "../../store/movieSlice";

export const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(store => store.movies.landingTrailer);

  const getMovieTrailer = async (id) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );
    const json = await response.json();
    const trailerList = json.results.filter((video) => {
      return video.type === "Trailer";
    });
    const trailer = trailerList.length ? trailerList[0] : json.results[0];
    dispatch(addLandingTrailer(trailer));
  };

  useEffect(() => {
    if (movieId) {
      !trailerVideo && getMovieTrailer(movieId);
    }
  }, []);
};
