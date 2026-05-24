import app from "./app";

const raw = process.env.PORT;
const PORT = raw ? Number(raw) : 3030;

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  console.error(`Invalid PORT value: "${raw}". Must be an integer between 1 and 65535.`);
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
