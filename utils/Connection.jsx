import mongoose from "mongoose";
import { MONGO_URI } from "../configs/Envs";

export const DatabaseConnection = async () => {
  const URI = MONGO_URI;
  return mongoose.connect(URI);
};