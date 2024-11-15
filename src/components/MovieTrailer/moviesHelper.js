export const getMovieForShowcase = (movieList) => {
  const { id, original_title, overview } =
    movieList[0];
    // Math.floor(Math.random() * 10)
  return { id, original_title, overview };
};
