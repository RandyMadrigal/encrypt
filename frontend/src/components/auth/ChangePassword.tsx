import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPASSWORD } from "../../interface/user";
import { changePassword } from "../../services/Api";
import toast from "react-hot-toast";

export const ChangePassword = () => {
  const navigate = useNavigate();
  const { userName } = useParams<{ userName: string }>();

  const [formData, setformData] = useState<IPASSWORD>({
    password: "",
    confirmPassword: "",
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
    if (!userName) {
      toast.error("server error, try again");
      return;
    }

    try {
      const request = await changePassword(formData, userName);

      if (request) {
        navigate("/");
        toast.success("your password is already updated");
      } else {
        toast.error("password don't match");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white gap-2 ">
      <header className="text-2xl font-bold text-center">
        <h2>Nueva contraseña</h2>
      </header>

      <form className="bg-gray-900 w-11/12 p-6 rounded-xl" onSubmit={sendData}>
        <label htmlFor="password" className=" text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="new password"
          onChange={handleOnChange}
          className="bg-gray-500 text-white p-2 border w-11/12 md:w-full border-gray-300 rounded-lg my-3"
          required
        />
        <label htmlFor="confirmPassword" className=" text-white">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleOnChange}
          className="bg-gray-500 text-white p-2 border w-11/12 md:w-full border-gray-300 rounded-lg my-3"
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-800 font-bold  hover:bg-blue-500 rounded-lg p-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
