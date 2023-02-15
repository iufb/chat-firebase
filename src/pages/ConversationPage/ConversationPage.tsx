import { Outlet, useLocation } from "react-router-dom";

export const ConversationPage = (): JSX.Element => {
  const { pathname } = useLocation();
  const isMain = pathname === "/conversations";
  console.log(pathname);
  return (
    <div className={`page ${isMain && "center"} `}>
      {isMain ? <div>Choose chat or create new</div> : <Outlet />}
    </div>
  );
};
