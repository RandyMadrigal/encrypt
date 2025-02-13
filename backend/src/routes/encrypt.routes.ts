import Router from "express";
import { getEncryptPassword } from "../controllers/encrypt.controllers";
import { verifyJwtmiddleware } from "../middlewares/verifyJwt.middleware";
import { validateJoi } from "../middlewares/validateJoi.middleware";
import { encryptSchema } from "../utils/joiSchema/encrypt.schema";

const router = Router();

router.post(
  "/encrypt-password",
  verifyJwtmiddleware,
  validateJoi(encryptSchema),
  getEncryptPassword
);

export default router;
