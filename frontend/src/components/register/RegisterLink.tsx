import { Link } from "react-router-dom";

export const RegisterLink = () => {
  return (
    <div className="flex flex-col gap-2 text-white items-center md:items-start">
      <span>
        Don't have an account?{" "}
        <Link
          className=" font-bold text-blue-700 px-2 hover:underline"
          to="register"
        >
          Sign Up
        </Link>
      </span>

      <span>
        <Link
          className=" font-bold text-blue-700 px-2 hover:underline"
          to="forgotPassword"
        >
          Forgot Password?
        </Link>
      </span>
    </div>
  );
};
