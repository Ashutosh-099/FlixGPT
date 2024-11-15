import { useSelector } from "react-redux";
import MovieDetail from "./MovieDetail";
import MovieVideo from "./MovieVideo";
import { getMovieForShowcase } from "./moviesHelper";

const MovieTrailer = () => {
  const movieList = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movieList === undefined) return;
  const { id, original_title, overview } = getMovieForShowcase(movieList);

  return (
    <div>
      <div id="movie-container">
        <MovieVideo movieId={id} />
        <MovieDetail title={original_title} description={overview} />
      </div>
      <div>
        Second container asdasdasdasd
      </div>
    </div>
  );
};

export default MovieTrailer;
