import { hash } from "bcryptjs";

const ROUNDS = 12;

export const hashPassword = async (password: string): Promise<string> => {
  return hash(password, ROUNDS);
};
