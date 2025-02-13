import { useAuthContext } from "../context/AuthContext";
import { logout } from "../../services/Api";
import { useNavigate } from "react-router-dom";

export const NavLogin = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="text-white bg-blue-700 hover:bg-blue-800  rounded-lg px-4 py-2 "
        >
          logout
        </button>
      )}
    </>
  );
};
