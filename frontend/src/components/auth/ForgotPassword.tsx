import { useNavigate } from "react-router-dom";
import { IEMAIL } from "../../interface/user";
import { ChangeEvent, FormEvent, useState } from "react";
import { forgotPassword } from "../../services/Api";
import toast from "react-hot-toast";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setformData] = useState<IEMAIL>({
    email: "",
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
      const request = await forgotPassword(formData);
      console.log(request);

      if (request) {
        navigate("/");
        toast.success("check your email for more info...");
      } else {
        toast.error("insert a valid Email");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-white gap-2 ">
      <header className="text-2xl font-bold text-center">
        <h2>Recupera tu contraseña</h2>
      </header>

      <form className="bg-gray-900 w-11/12 p-6 rounded-xl" onSubmit={sendData}>
        <label htmlFor="email" className=" text-white">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="insert your email"
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
