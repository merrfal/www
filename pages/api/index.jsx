import { Cors } from "../../middlewares"
import { ValidateVariables } from "../../utils/Http"
import { RouteMethod } from "../../utils/Routing"

const RunMiddlewares = async (req, res, next) => {
  const allowed_origin = await Cors(req, res)

  if (allowed_origin) next()

  else Response({
    res,
    code: 401,
    success: false,
    data: null,
    message: 'Kjo origjine nuk lejohet te aksesoj kete resurs. Ju lutem kontaktoni administratorin e sistemit.',
    error: error,
  })
}

export default async function handler(req, res) {
  const TARGET = req.body.target
  const PAYLOAD = req.body.payload

  if (req.method !== "POST") {
    res.redirect("/")
    return
  }

  else {
    await RunMiddlewares(req, res, () => {
      ValidateVariables(TARGET, PAYLOAD, res, req)
      RouteMethod(TARGET, PAYLOAD, res, req)
    })
  }
}

export const config = {
  api: { 
    externalResolver: true 
  }
}