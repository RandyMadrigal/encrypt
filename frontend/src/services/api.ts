import { EncryptPayload } from "../types";

const API_URL = import.meta.env.VITE_API_ENCRYPT_URL;

if (!API_URL) {
  throw new Error("[Config] VITE_API_ENCRYPT_URL is not defined. Check your .env file.");
}

export const encryptPassword = async (data: EncryptPayload): Promise<string> => {
  const response = await fetch(API_URL, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || `Error ${response.status}`);
  }

  const info = await response.json();
  return info.text;
};
