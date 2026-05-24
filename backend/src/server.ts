import app from "./app";

const raw = process.env.PORT;
const PORT = raw ? Number(raw) : 3030;

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  console.error(`Invalid PORT value: "${raw}". Must be an integer between 1 and 65535.`);
  process.exit(1);
}

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Finish in-flight requests before closing (Docker stop, PM2 restart, systemd)
const shutdown = (signal: string) => {
  console.log(`${signal} received — shutting down gracefully`);
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
