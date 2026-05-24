import { Request, Response } from "express";
import { encryptService } from "../services/encrypt.services";

export const getEncryptPassword = async (req: Request, res: Response) => {
  const { text } = req.body;

  try {
    const hashPassword = await encryptService.encryptPassword(text);
    res.status(200).json({ message: "encrypted successfully", text: hashPassword });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
