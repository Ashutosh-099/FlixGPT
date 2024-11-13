import { useSelector } from "react-redux";
import MovieDetail from "./MovieDetail";

const MovieTrailerComponent = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === undefined) return;

  const { id, original_title, overview } = movies[Math.floor(Math.random() * 10)];

  return (
    <div id="movie-container">
      <MovieDetail title={original_title} overview={overview} />
    </div>
  );
};

export default MovieTrailerComponent;
