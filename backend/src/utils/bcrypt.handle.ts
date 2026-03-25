import { hash } from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  const salt: number = 12;
  return await hash(password, salt);
};
