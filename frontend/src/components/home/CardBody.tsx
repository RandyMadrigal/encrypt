import { ChangeEvent, FormEvent, useState } from "react";
import { IENCRYPT } from "../../interface/user";
import { encryptPassword } from "../../services/Api";
import { Encrypt } from "./Encrypt";

export const CardBody = () => {
  const [encrypt, setEncrypt] = useState("-");

  const [formData, setFormData] = useState<IENCRYPT>({
    text: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const request = await encryptPassword(formData);

      if (request) {
        setEncrypt(request);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="text-center" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleOnChange}
            placeholder="Insert text"
            className="bg-gray-50 border w-64 md:w-96 p-2 my-2  border-gray-300 text-black rounded-lg text-center "
            required
          />

          <button
            type="submit"
            className="text-white md:mx-2 bg-blue-800 font-bold  hover:bg-blue-500 rounded-lg p-2"
          >
            クリック Click
          </button>
        </div>
      </form>
      <Encrypt encrypt={encrypt} />
    </>
  );
};
