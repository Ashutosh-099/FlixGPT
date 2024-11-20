import { useSelector } from "react-redux";
import MovieDetail from "./MovieDetail";
import MovieVideo from "./MovieVideo";
import { getMovieForShowcase } from "./moviesHelper";

const MovieTrailer = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movieList === null) return;
  const { id, original_title, overview } = getMovieForShowcase(movieList);

  return (
    <div id="movie-container">
      <MovieDetail title={original_title} description={overview} />
      <MovieVideo movieId={id} />
    </div>
  );
};

export default MovieTrailer;
