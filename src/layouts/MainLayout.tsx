import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
  <>
    <Navbar />
    <ThemeSwitcher />
      <Outlet />
      <Footer/>
    </>
  );
};

export default MainLayout;
