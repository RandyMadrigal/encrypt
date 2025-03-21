import { Schema, model } from "mongoose";
import IHISTORY from "../interfaces/history.interface";

const historySchema = new Schema<IHISTORY>(
  {
    userId: { type: String, required: true, ref: "users" },
    text: { type: String, required: true },
    encrypted: { type: String, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

export default model("history", historySchema);
