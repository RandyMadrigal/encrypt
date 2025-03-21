import app from "./app";
import connection from "./config/db.connection";

const PORT = process.env.PORT || 3000;

connection()
  .then(() => {
    console.log(">>> Connected to MongoDB database");
    app.listen(PORT, () => console.log(`>>> server running in port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
