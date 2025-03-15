import { ChangeEvent, FormEvent, useState } from "react";
import { RegisterLink } from "../register/RegisterLink";
import { ILOGIN } from "../../interface/user";
import { login } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

export const AuthForm = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();

  const [formData, setformData] = useState<ILOGIN>({
    userName: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const request = await login(formData);

      if (request) {
        setIsAuthenticated(true);
        navigate("/encrypt");
        toast.success("Welcome");
      } else {
        toast.error("wrong user or password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="mx-auto w-80 md:w-96" onSubmit={sendData}>
      <div className="flex flex-col mb-5  ">
        <label htmlFor="email" className="mb-2 text-white">
          User name
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleOnChange}
          className="bg-gray-500 text-white p-2 border w-11/12 md:w-full border-gray-300 rounded-lg"
          placeholder="insert your user name"
          required
        />
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="password" className="mb-2 text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="insert your password"
          value={formData.password}
          onChange={handleOnChange}
          className="bg-gray-500 text-white p-2 border w-11/12 md:w-full border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="flex flex-col items-center gap-5 mb-5 md:flex-row md:justify-center md: md:gap-3  ">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-3xl w-1/4 p-3"
        >
          log in
        </button>
        <RegisterLink />
      </div>
    </form>
  );
};
