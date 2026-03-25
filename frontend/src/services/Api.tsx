import { IENCRYPT } from "../interface/user";

const API_URL = import.meta.env.VITE_API_URL;

export const encryptPassword = async (data: IENCRYPT) => {
  const response = await fetch(`${API_URL}/api/encrypt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const text = await response.text(); // debug real
    throw new Error(`Error ${response.status}: ${text}`);
  }

  const info = await response.json();
  return info.text;
};
