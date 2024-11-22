import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const scrollContainerRef = useRef(null);
  const { title, movieData } = props;

  const onScrollBtnClick = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 550;

      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }

  }

  return (
    <div className="p-4">
      <p className="text-3xl font-semibold">{title}</p>
      <div>
        <button className="absolute left-0 mt-[12%]" onClick={() => { onScrollBtnClick("left")}}>
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14 8L10 12L14 16"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <button className="absolute right-0 mt-[12%]" onClick={() => { onScrollBtnClick("right")}}>
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 16L14 12L10 8"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <section className="flex flex-row flex-nowrap overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory scrollbar-hide" ref={scrollContainerRef}>
          {movieData.map((movie) => (
            <MovieCard key={movie.id} imagePath={movie?.poster_path} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default MovieList;
