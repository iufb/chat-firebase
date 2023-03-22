import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { Skeleton } from "../ui";
import { useAuth } from "./hooks/useAuth";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  return typeof user === "undefined" ? (
    <Skeleton />
  ) : user ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};
