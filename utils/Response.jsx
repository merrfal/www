import { ShowNotification, HideNotification } from "../controllers/Slices"

export const Response = (props) => {
  const { res, code, success, data, message, error = null } = props

  const obj = {
    success,
    message,
    data,
    code,
    timestamp: new Date().toISOString(),
  }

  error && (obj.error = JSON.stringify(error))

  res.status(code).send(obj)
}

export const Notification = (props) => {
  const { dispatch, message, type } = props
  const config = { Title: message, Type: type, Visibility: true }

  dispatch(ShowNotification(config))
  setTimeout(() => dispatch(HideNotification()), 5000)
}