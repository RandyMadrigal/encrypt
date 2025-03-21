import { Router } from "express";
import {
  createHistory,
  getHistories,
} from "../controllers/history.controllers";

const router = Router();

router.get("/histories/:userId", getHistories);
router.post("/create", createHistory);

export default router;
