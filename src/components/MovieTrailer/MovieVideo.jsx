import { useSelector } from "react-redux";
import { useGetMovieTrailer } from "../../utils/hooks/useGetMovieTrailer";

const MovieVideo = (props) => {
  const trailerVideoId = useSelector((store) => store.movies?.landingTrailer);
  const { movieId } = props;
  useGetMovieTrailer(movieId);

  return (
    <div className="absolute">
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideoId?.key + "?&autoplay=1&mute=1&controls=0&rel=0"}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-screen aspect-[16/7]"
      ></iframe>
    </div>
  );
};

export default MovieVideo;
