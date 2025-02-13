import { ICREATEUSER, IENCRYPT, ILOGIN } from "../interface/user";

export const createUser = async (data: ICREATEUSER) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_REGISTER_URL || "API_REGISTER_URL",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(
        `error al crear usuario, Status:${response.status}, msg: ${err.msg} `
      );
    }

    const info = await response.json();
    return info;
  } catch (err) {
    console.log(err);
  }
};

export const login = async (data: ILOGIN) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_LOGIN_URL || "API_LOGIN_URL",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(
        `log in error, Status:${response.status}, Msg: ${err.msg} `
      );
    }
    const info = await response.json();
    console.log(info);
    return info;
  } catch (err) {
    console.log(err);
  }
};

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
      }
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

export const logout = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_LOGOUT_URL || "API_LOGOUT_URL",
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (!response.ok) {
      const err = await response.json();
      throw new Error(
        `Logout error, Status: ${response.status}, Msg: ${err.message}`
      );
    }
  } catch (err) {
    console.log(err);
  }
};
