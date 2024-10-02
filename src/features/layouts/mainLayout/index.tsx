import { Outlet } from "react-router-dom";
import Header from "../header";
import S from "./index.module.scss";

const MainLayout = () => {
  return (
    <div className={S.root}>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
