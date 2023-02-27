import { Outlet } from "react-router-dom";

export const MobileSidebarLayout = () => {
  return (
    <div className="flex flex-col w-full h-screen ">
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
