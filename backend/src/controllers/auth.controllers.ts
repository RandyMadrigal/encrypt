import { Request, Response } from "express";
import * as authService from "../services/auth.services";
import { createToken, verifyToken } from "../utils/jwt.handle";
import { sendMail } from "../utils/sendMail.handle";
import "dotenv/config";

export const createUser = async (req: Request, res: Response) => {
  const { name, userName, email, password, isActive } = req.body;

  try {
    const user = await authService.createUser({
      name,
      userName,
      email,
      password,
      isActive,
    });

    if (user) {
      res.status(201).json({ msg: "user created successfully" });
      await sendMail(user.email, user.name, "welcome");
      return;
    }

    res.status(400).json({ msg: "User not created" });
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

export const login = async (req: Request, res: Response) => {
  const { userName, password } = req.body;

  try {
    const user = await authService.login(userName, password);

    if (user) {
      //create token
      const token = createToken(user);
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Solo true en HTTPS
      });
      res
        .status(201)
        .json({ message: `Login successful, Hi ${user.name}`, token: token });
    }
  } catch (err) {
    if (err instanceof Error) {
      res.status(409).json({ msg: err.message });
      return;
    }

    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token").json({ message: "logout successful" });
};

export const checkToken = async (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    res.json({ authenticated: false });
    return;
  }

  try {
    verifyToken(token, process.env.JWT_SECRET || "secretToken");
    res.json({ authenticated: true });
  } catch {
    res.json({ authenticated: false });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  const { password, confirmPassword } = req.body;
  const { userName } = req.params;
  console.log(password, confirmPassword);

  try {
    const user = await authService.changePassword(
      userName,
      password,
      confirmPassword
    );

    if (user) {
      res.status(201).json({ msg: "updated password" });
      return;
    }
    res.status(400).json({ msg: "the password can't be updated" });
    return;
  } catch (err) {
    if (err instanceof Error) {
      res.status(409).json({ msg: err.message });
      return;
    }
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await authService.forgotPassword(email);
    if (user) {
      res.status(201).json({ msg: "Success" });
      await sendMail(user.email, user.name, "forgotPassword", user.userName);
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

export const active = async (req: Request, res: Response) => {};
