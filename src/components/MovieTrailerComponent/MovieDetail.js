const MovieDetail = (props) => {
  const { title, overview } = props;

  return (
    <div id="movie-detail" className="pt-36 px-12">
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
};

export default MovieDetail;
