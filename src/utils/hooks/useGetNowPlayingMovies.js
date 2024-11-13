import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, apiURLs } from "../constants";
import { addNowPlayingMovies } from "../../store/movieSlice";

export const useGetNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      apiURLs.nowPlayingMovies,
      API_OPTIONS
    );
    const jsonData = await response.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
