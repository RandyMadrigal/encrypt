import express, { Application, NextFunction, Request, Response } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import encryptRoutes from "./routes/encrypt.routes";

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL, // URL del cliente",
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    credentials: true, // Para permitir el uso de cookies
  })
);

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/encrypt", encryptRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ msg: "not found" });
});

export default app;
