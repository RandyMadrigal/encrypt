import { Link } from "react-router-dom";

export const RegisterLink = () => {
  return (
    <p className="text-white">
      Don't have an account?
      <span className="font-bold text-blue-700 px-2 hover:underline">
        <Link to="register">Sign Up</Link>
      </span>
    </p>
  );
};
