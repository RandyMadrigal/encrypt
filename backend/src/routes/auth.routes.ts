import { Router } from "express";
import {
  createUser,
  login,
  logout,
  checkToken,
} from "../controllers/auth.controllers";
import { verifyJwtmiddleware } from "../middlewares/verifyJwt.middleware";
import { validateJoi } from "../middlewares/validateJoi.middleware";
import { createUserSchema } from "../utils/joiSchema/createUser.schema";
import { loginSchema } from "../utils/joiSchema/login.schema";

const router = Router();

router.post("/login", validateJoi(loginSchema), login);
router.post("/register", validateJoi(createUserSchema), createUser);
router.post("/logout", verifyJwtmiddleware, logout);

router.get("/protected", checkToken);

export default router;
