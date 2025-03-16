import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { LoadingPage } from "../components/LoadingPage";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) return <LoadingPage />;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
