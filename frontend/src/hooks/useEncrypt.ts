import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { encryptPassword } from "../services/api";
import { TOAST_ERROR_STYLE } from "../constants";

export const useEncrypt = () => {
  const [hash, setHash] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      setHash(await encryptPassword({ text }));
    } catch {
      toast.error("Encryption failed.", TOAST_ERROR_STYLE);
    } finally {
      setLoading(false);
    }
  };

  return { hash, text, setText, loading, handleSubmit };
};
