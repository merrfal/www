import { ValidateVariables } from "../utils/Http";
import { RouteMethod } from "../utils/Routing";

export default async function handler(req, res) {
  const TARGET = req.body.target;
  const PAYLOAD = req.body.payload;

  if (req.method !== "POST") {
    res.redirect("/")
    return
  }

  else {
    ValidateVariables(TARGET, PAYLOAD, res)
    RouteMethod(TARGET, PAYLOAD, res)
  }
}

export const config = {
  api: { externalResolver: true }
}