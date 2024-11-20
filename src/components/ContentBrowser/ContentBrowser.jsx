import MovieTrailer from "../MovieTrailer/MovieTrailer";
import ContentCarousel from "./ContentCarousel";

const ContentBrowser = () => {
  return (
    <div className="bg-black">
      <MovieTrailer />
      <ContentCarousel />
    </div>
  );
};

export default ContentBrowser;
