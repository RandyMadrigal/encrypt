import { hash } from "bcryptjs";
import type { IHashService } from "../interfaces/hash.interface";

const ROUNDS = 12;

export const bcryptService: IHashService = {
  hash: (text: string) => hash(text, ROUNDS),
};
