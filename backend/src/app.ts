import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import encryptRoutes from "./routes/encrypt.routes";

const app: Application = express();

// Middlewares básicos
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// CORS seguro
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Rutas
app.use("/api/encrypt", encryptRoutes);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ msg: "Not Found" });
});

export default app;
