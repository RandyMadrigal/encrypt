import { IENCRYPT } from "../interface/user";

export const encryptPassword = async (data: IENCRYPT): Promise<string> => {
  const response = await fetch(import.meta.env.VITE_API_ENCRYPT_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.message || err.msg || `Error ${response.status}`);
  }

  const info = await response.json();
  return info.text;
};
