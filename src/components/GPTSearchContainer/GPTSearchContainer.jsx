import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../utils/languageConfig";
import { useRef } from "react";
import genAI from "../../utils/genai.config";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResults } from "../../store/gptMovieSlice";
import MovieSuggestion from "./MovieSuggestion";

const GPTSearchContainer = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.langConfig.lang);
  const searchInput = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",

      API_OPTIONS
    );

    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleGptSearchClick = async () => {
    const srcTxt = searchInput.current.value;
    // Make an API call to get the movie results
    const gptQuery =
      "Act as a Movie recommendation system, you need to suggest TOP 5 movies based on the query:'" +
      srcTxt +
      "'. Make sure to only return TOP 5 movies, and in comma seperated manner: For example: 'Transformer, Dead or Alive, Incubation, Evil Dead, Insidious'";
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const genAiResult = await response.text();

      if (!genAiResult) {
        throw new Error("Incorrect response");
      }

      const suggestedMovies = genAiResult.split(",");

      const moviePromises = suggestedMovies.map((movie) =>
        searchMovieTMDB(movie)
      );
      // It will return Promise array because each API will take time
      const movieResults = await Promise.all(moviePromises);
      dispatch(
        addGptMovieResults({
          suggestions: suggestedMovies,
          results: movieResults,
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="absolute w-full background-image-login bg-cover h-screen">
      <div className="pt-[10%] flex justify-center">
        <form
          className="w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="p-4 m-4 col-span-9"
            placeholder={lang[langKey].searchBarPlaceholder}
            ref={searchInput}
          />
          <button
            className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
      <MovieSuggestion />
    </div>
  );
};

export default GPTSearchContainer;
