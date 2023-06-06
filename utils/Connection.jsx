import mongoose from "mongoose";
import { MONGO_URI } from "../configs/Envs";

export const DatabaseConnection = async () => {
  const URI = MONGO_URI;
  return mongoose.connect(URI);
};

export const ConnectionLocation = async () => {
  const dataPromise = await fetch(`https://ipapi.co/json`);
  const data = await dataPromise.json();

  if (data) return {
    data,
    success: true,
  }

  else return {
    data: null,
    success: false,
  }
}