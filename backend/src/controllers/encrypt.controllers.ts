import { Request, Response } from "express";
import * as encryptService from "../services/encrypt.services";

export const getEncryptPassword = async (req: Request, res: Response) => {
  const { text } = req.body;

  try {
    const hashPassword = await encryptService.encryptPassword(text);
    res.status(201).json({ msg: "encrypted successfully", text: hashPassword });
    return;
  } catch (err) {
    console.log(err);
  }
};
