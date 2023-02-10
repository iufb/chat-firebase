import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const ProtectedRoute = ({children}: PropsWithChildren) => {
  const { user } = useAuth();
  return typeof user === "undefined" ? (
    <h1>Loading...</h1>
  ) : user ? (
  <>
        {children}
      </>
  ) : (
    <Navigate to="/login" replace />
  );
};
