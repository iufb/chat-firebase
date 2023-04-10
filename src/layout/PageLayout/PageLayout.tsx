import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../components";

export const PageLayout = (): JSX.Element => {
  const { pathname } = useLocation();
  const shouldRedirect = pathname == "/";
  return (
    <>
      <div className="h-screen  overflow-hidden">
        <Navbar />
        <div className="container ">
          <Outlet />
        </div>
      </div>
      {shouldRedirect && <Navigate replace to="/home" />}
    </>
  );
};
