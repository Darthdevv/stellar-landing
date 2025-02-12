import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ThemeSwitcher from "../components/ThemeSwitcher";

const MainLayout = () => {
  return (
  <>
    <Navbar />
    <ThemeSwitcher />
    <Outlet />
    </>
  );
};

export default MainLayout;
