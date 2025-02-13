import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <div>Loading...</div>;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
