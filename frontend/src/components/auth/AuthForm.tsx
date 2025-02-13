import { ChangeEvent, FormEvent, useState } from "react";
import { RegisterLink } from "../register/RegisterLink";
import { ILOGIN } from "../../interface/user";
import { login } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import { Error } from "../Error";
import { useAuthContext } from "../context/AuthContext";

export const AuthForm = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();

  const [error, setError] = useState(false);

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
      }
      setError(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="w-96 mx-auto" onSubmit={sendData}>
      {error && <Error msg={"Error"} />}
      <div className="flex flex-col mb-5">
        <label htmlFor="email" className="mb-2 text-white">
          User name
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleOnChange}
          className="bg-gray-500 text-white p-2 border border-gray-300 rounded-lg"
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
          value={formData.password}
          onChange={handleOnChange}
          className="bg-gray-500 text-white p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="flex flex-row mb-5 items-center gap-5">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
        >
          log in
        </button>
        <RegisterLink />
      </div>
    </form>
  );
};
