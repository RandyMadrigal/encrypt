import { IENCRYPT } from "../interface/user";

export const encryptPassword = async (data: IENCRYPT) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_ENCRYPT_URL || "API_ENCRYPT_URL",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(`error, Status:${response.status}, Msg: ${err.msg} `);
    }
    const info = await response.json();

    return info.text;
  } catch (err) {
    console.log(err);
  }
};
