import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";

export const MobileLayout = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
