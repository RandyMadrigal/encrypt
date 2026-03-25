import { ChangeEvent, FormEvent, useState } from "react";
import { IENCRYPT } from "../../interface/user";
import { encryptPassword } from "../../services/Api";
import { InfoPanel } from "./InfoPanel";
import { DevPanel } from "../devPanel/DevPanel";
import { Encrypt } from "./Encrypt";

export const CardBody = () => {
  const [encrypt, setEncrypt] = useState("-");
  const [formData, setFormData] = useState<IENCRYPT>({ text: "" });
  const [showDev, setShowDev] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const request = await encryptPassword(formData);
      if (request) setEncrypt(request);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleOnChange}
          placeholder="Insert text..."
          className="
            w-full
            p-3
            rounded-xl
            bg-white/20
            text-white
            placeholder-gray-300
            backdrop-blur-md
            border border-white/20
            focus:outline-none
            focus:ring-2
            focus:ring-blue-400
            transition-all duration-200
          "
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="
    w-full
    py-3
    rounded-xl
    font-semibold
    bg-blue-500
    hover:bg-blue-400
    active:scale-95
    transition-all duration-200
    shadow-lg shadow-blue-500/30
    flex items-center justify-center gap-2
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Encrypting...
            </>
          ) : (
            "Encrypt"
          )}
        </button>
      </form>

      <Encrypt encrypt={encrypt} />

      <button
        onClick={() => setShowDev(!showDev)}
        className="
    mt-3
    text-xs
    text-gray-400
    hover:text-blue-400
    transition-colors
  "
      >
        {showDev ? "Hide developer info ▲" : "Show developer info ▼"}
      </button>

      {showDev && <DevPanel hash={encrypt} />}

      <InfoPanel />
    </>
  );
};
