import { TMDB_IMAGE_URL } from "../../utils/constants";

const MovieCard = (props) => {
  const { imagePath } = props;

  if (!imagePath) return null;
  return (
    <div className="flex-shrink-0 py-4">
      <img
        src={TMDB_IMAGE_URL + imagePath}
        alt="Movie poster"
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
