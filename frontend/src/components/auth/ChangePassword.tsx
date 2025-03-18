export const ChangePassword = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-2 ">
      <header className="text-2xl font-bold text-center">
        <h2>Nueva contraseña</h2>
      </header>

      <form className="bg-gray-900 w-11/12 p-6 rounded-xl">
        <label htmlFor="password" className=" text-white">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="new password"
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
