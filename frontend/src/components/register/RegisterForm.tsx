import { ChangeEvent, FormEvent, useState } from "react";
import { ICREATEUSER } from "../../interface/user";
import { createUser } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ICREATEUSER>({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const request = await createUser(formData);

      if (request) {
        navigate("/");
        toast.success("Successfully");
      } else {
        toast.error("Ups... we have a problem");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={sendData} className="md:w-7/12 lg:w-5/12 mx-auto">
      <div className="flex flex-col mt-2 md:gap-5 md:grid md:grid-cols-2 md:place-items-center">
        <div className="flex flex-col mb-5">
          <label htmlFor="Name" className="mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            id="Name"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            className="bg-gray-500 text-white p-2 border border-gray-300 rounded-lg md:w-80 lg:96"
            placeholder="Insert your name"
            required
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="text" className="mb-2 text-white">
            User name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleOnChange}
            className="bg-gray-500 text-white p-2 border border-gray-300 rounded-lg md:w-80 lg:96"
            placeholder="Insert your user name"
            required
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="email" className="mb-2 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            className="bg-gray-500 text-white p-2 border border-gray-300 rounded-lg md:w-80 lg:96"
            placeholder="Insert your Email"
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
            className="bg-gray-500 text-white p-2 border border-gray-300 rounded-lg md:w-80 lg:96"
            placeholder="Insert your password"
            required
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
        >
          Register
        </button>
      </div>
    </form>
  );
};
