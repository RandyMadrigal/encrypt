import { Request, Response } from "express";
import * as historyService from "../services/history.services";

export const createHistory = async (req: Request, res: Response) => {
  const { userId, text, encrypted } = req.body;

  try {
    const history = await historyService.createHistory({
      userId,
      text,
      encrypted,
    });

    if (history) {
      res.status(201).json({ msg: "history created" });
      return;
    }

    res.status(400).json({ msg: "history not created" });
    return;
  } catch (err) {
    if (err instanceof Error) {
      res.status(409).json({ msg: err.message });
      return;
    }

    res.status(500).json({ msg: "Internal Server Error" });
    return;
  }
};

export const getHistories = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const data = await historyService.getAll(userId);

    if (data) {
      res.status(201).json({ msg: "Success" });
      return;
    }

    res.status(400).json({ msg: "failed" });
    return;
  } catch (err) {
    if (err instanceof Error) {
      res.status(409).json({ msg: err.message });
      return;
    }
    res.status(500).json({ msg: "Internal Server Error" });
    return;
  }
};
