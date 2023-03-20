import mongoose from "mongoose";
import { MONGO_URI } from "../configs/Constants";

export const DatabaseConnection = async () => {
  const URI = MONGO_URI;
  return mongoose.connect(URI);
};
