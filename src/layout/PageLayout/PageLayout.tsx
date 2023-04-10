import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../components";

export const PageLayout = (): JSX.Element => {
  return (
    <div className="h-screen  overflow-hidden">
      <Navbar />
      <div className="container ">
        <Outlet />
      </div>
    </div>
  );
};
