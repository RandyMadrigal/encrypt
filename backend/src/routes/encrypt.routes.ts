import Router from "express";
import { getEncryptPassword } from "../controllers/encrypt.controllers";
import { validateJoi } from "../middlewares/validateJoi.middleware";
import { encryptSchema } from "../utils/joiSchema/encrypt.schema";

const router = Router();

router.post("/", validateJoi(encryptSchema), getEncryptPassword);

export default router;
