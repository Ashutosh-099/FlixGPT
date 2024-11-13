import { useEffect } from "react";

export const useGetMovieTrailer = (movieId) => {
  const getMovieTrailer = async (id) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US"
    );
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    getMovieTrailer(movieId);
  }, []);
};
