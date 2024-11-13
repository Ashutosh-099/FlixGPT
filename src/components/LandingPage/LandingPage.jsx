import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useGetNowPlayingMovies } from "../../utils/useGetNowPlayingMovies";

const LandingPage = () => {
  useGetNowPlayingMovies();

  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingPage;
