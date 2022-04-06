import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const MainPage = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Outlet />
    </div>
  );
};

export default MainPage;
