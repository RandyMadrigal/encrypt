import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import encryptRoutes from "./routes/encrypt.routes";

const app: Application = express();

// Security headers first — must precede all other middleware
app.use(helmet());

// CORS before body parsing: preflights never reach the parser and
// requests from blocked origins are rejected without touching the body
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
    // No `credentials: true` — the API uses no cookies or sessions
  }),
);

// Body parser with explicit size cap (max input is 200 chars)
app.use(express.json({ limit: "10kb" }));

// Request logging after CORS so rejected requests are not logged
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Rate limiting scoped to /api only
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
