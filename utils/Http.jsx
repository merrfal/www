import { getAuth } from "firebase/auth"
import { Response } from "./Response"
import { Translation } from "./Translations"

export const ValidateVariables = (target, payload, res) => {
  const access = Validator(target, payload)

  if (!access) {
    const response = {
      res,
      code: 400,
      success: false,
      data: null,
      message: Translation("api-wrong-reqload"),
    }

    Response(response)
  }
}

const Validator = (target, payload) => {
  let pass = false

  let param_one = target.split("/")
  let param_two = payload

  if (param_one.length === 2) pass = true
  if (param_one[0] === "USERS") pass = true
  if (param_one[0] === "CATEGORIES") pass = true
  if (param_one[0] === "PRODUCTS") pass = true
  if (param_one !== "") pass = true
  if (typeof param_two === "object") pass = true

  return pass
}

export const Request = async (target, payload) => {
  const auth = getAuth()
  const token = await auth.currentUser?.getIdToken() || null

  const Configurations = {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({
      target,
      payload: payload,
    })
  }

  return fetch(`${window.location.origin}/api`, Configurations)
}