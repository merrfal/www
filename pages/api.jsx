import { ValidateVariables } from "../utils/Http";
import { RouteMethod } from "../utils/Routing";

export default async function handler(req, res) {
  const TARGET = req.body.target;
  const PAYLOAD = req.body.payload;

  ValidateVariables(TARGET, PAYLOAD, res);
  RouteMethod(TARGET, PAYLOAD, res);
}