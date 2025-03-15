import { Link } from "react-router-dom";

export const RegisterHeader = () => {
  return (
    <div className="w-9/12 mx-auto mb-2 md:mb-5 text-white text-center">
      <h2 className="text-2xl mt-5 md:text-5xl my-2">Create your account</h2>

      <Link className="md:text-xl" to="/">
        Have an account ?
        <span className="text-blue-700 font-bold hover:underline mx-2 ">
          Log in now
        </span>
      </Link>
    </div>
  );
};
