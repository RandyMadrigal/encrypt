import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { encryptPassword } from "../services/api";

const TOAST_ERROR_STYLE = {
  style: {
    background: "#0F1A2E",
    border: "1px solid rgba(239,68,68,0.3)",
    color: "#fff",
    fontSize: "14px",
  },
};

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
      toast.error("Encryption failed. Is the API running?", TOAST_ERROR_STYLE);
    } finally {
      setLoading(false);
    }
  };

  return { hash, text, setText, loading, handleSubmit };
};
