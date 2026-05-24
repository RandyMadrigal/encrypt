import type { IHashService } from "../interfaces/hash.interface";
import { bcryptService } from "../utils/bcrypt.handle";

export const createEncryptService = (hasher: IHashService = bcryptService) => ({
  encryptPassword: (text: string) => hasher.hash(text),
});

export const encryptService = createEncryptService();
