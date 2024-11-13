import { useEffect } from "react";
import { API_OPTIONS } from "./constants";

export const useGetNowPlayingMovies = () => {
  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await response.json();
    console.log(jsonData);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
