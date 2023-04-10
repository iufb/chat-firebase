import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../components";

export const MobileLayout = () => {
  const { pathname } = useLocation();
  const shouldRedirect = pathname == "/";
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      {shouldRedirect && <Navigate replace to="/home" />}
    </>
  );
};
