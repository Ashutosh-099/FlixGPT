import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useGetNowPlayingMovies } from "../../utils/hooks/useGetNowPlayingMovies";

const LandingPage = () => {
  useGetNowPlayingMovies();

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingPage;
