import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

export const PageLayout = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="container  md:pt-[100px]">
        <Outlet />
      </div>
    </div>
  );
};
