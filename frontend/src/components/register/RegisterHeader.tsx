import { Link } from "react-router-dom";

export const RegisterHeader = () => {
  return (
    <div className="w-6/12 mx-auto mb-10 text-white text-center">
      <h2 className="text-5xl mb-4">Create your account</h2>
      <h3 className="text-2xl">
        Have an account?{" "}
        <Link to="/">
          <span className="text-blue-700 font-bold hover:underline">
            Log in now
          </span>
        </Link>
      </h3>
    </div>
  );
};
