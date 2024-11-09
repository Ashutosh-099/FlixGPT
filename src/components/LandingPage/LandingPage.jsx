import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default LandingPage;
