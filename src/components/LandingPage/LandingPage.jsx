import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useGetNowPlayingMovies } from "../../utils/hooks/useGetNowPlayingMovies";
import { usePopularMovies } from "../../utils/hooks/usePopularMovies";
import { useTopRatedMovies } from "../../utils/hooks/useTopRatedMovies";

const LandingPage = () => {

  useGetNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingPage;
