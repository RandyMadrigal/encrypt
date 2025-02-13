import { hashPassword } from "../utils/bcrypt.handle";

export const encryptPassword = async (text: string) => {
  try {
    return await hashPassword(text);
  } catch (err) {
    throw err;
  }
};
