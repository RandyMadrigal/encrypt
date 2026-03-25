import { IENCRYPT } from "../interface/user";

const API_URL = import.meta.env.VITE_API_URL;

export const encryptPassword = async (data: IENCRYPT) => {
  try {
    const response = await fetch(`${API_URL}/api/encrypt`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(
        `Error ${response.status}: ${err.msg || "Something went wrong"}`,
      );
    }

    const info = await response.json();
    return info.text;
  } catch (err) {
    console.log(err);
  }
};
