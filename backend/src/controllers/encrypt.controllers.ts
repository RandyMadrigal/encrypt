import { Request, Response } from "express";
import * as encryptService from "../services/encrypt.services";

export const getEncryptPassword = async (req: Request, res: Response) => {
  const { text } = req.body;

  try {
    const hashPassword = await encryptService.encryptPassword(text);
    res.status(200).json({ msg: "encrypted successfully", text: hashPassword });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
};
