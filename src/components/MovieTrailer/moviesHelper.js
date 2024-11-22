export const getMovieForShowcase = (movieList) => {
  const { id, original_title, overview } =
    movieList[0];
  return { id, original_title, overview };
};
