import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const ContentCarousel = () => {
  const nowPlayingMovieList = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovieList = useSelector((store) => store.movies.popularMovies);
  const topRatedMovieList = useSelector((store) => store.movies.topRatedMovies);

  return (
    <div className="relative text-white p-6 z-40">
      {nowPlayingMovieList && (
        <div className="-mt-28">
          <MovieList title={"Now Playing"} movieData={nowPlayingMovieList} />
        </div>
      )}
      {popularMovieList && (
        <div className="mb-6">
          <MovieList title={"Popular Movies"} movieData={popularMovieList} />
        </div>
      )}
      {topRatedMovieList && (
        <div className="mb-6">
          <MovieList title={"Top Rated"} movieData={topRatedMovieList} />
        </div>
      )}
    </div>
  );
};

export default ContentCarousel;
