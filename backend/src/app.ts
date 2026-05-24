import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import encryptRoutes from "./routes/encrypt.routes";

const app: Application = express();

// Required when running behind a reverse proxy (Nginx, cloud LB).
// Without this, req.ip is the proxy IP and all clients share one rate-limit slot.
app.set("trust proxy", 1);

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Health check — must be before rate limiter so load balancers are never rate-limited
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.use(
  "/api",
  rateLimit({
    windowMs: 60_000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many requests, please try again later." },
  }),
);

app.use("/api/encrypt", encryptRoutes);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;