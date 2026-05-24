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

    if (!text.trim()) {
      toast.error("Input cannot be empty.", TOAST_ERROR_STYLE);
      return;
    }

    setLoading(true);
    try {
      setHash(await encryptPassword({ text }));
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        toast.error("Request timed out. Is the API running?", TOAST_ERROR_STYLE);
      } else {
        const message = err instanceof Error ? err.message : "Encryption failed.";
        toast.error(message, TOAST_ERROR_STYLE);
      }
    } finally {
      setLoading(false);
    }
  };

  return { hash, text, setText, loading, handleSubmit };
};
