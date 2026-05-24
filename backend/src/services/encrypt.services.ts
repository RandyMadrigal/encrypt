import { hashPassword } from "../utils/bcrypt.handle";

export const encryptPassword = (text: string) => hashPassword(text);
