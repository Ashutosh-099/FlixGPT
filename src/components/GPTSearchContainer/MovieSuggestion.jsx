import { useSelector } from "react-redux";
import MovieList from "../ContentBrowser/MovieList";

const MovieSuggestion = () => {
  const { suggestions, movieResults } = useSelector((store) => store.gptMovie);
  if (!suggestions || !movieResults) return null;

  return (
    <div className="p-4 m-4 bg-black text-white opacity-90">
      {suggestions.map((suggestion, index) => (
        <MovieList
          key={suggestion}
          title={suggestion}
          movieData={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default MovieSuggestion;
