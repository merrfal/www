import { NOTIFICATION_TIME } from "../configs/Constants";
import { ShowNotification, HideNotification } from "../controllers/Slices";

export const Response = (props) => {
  const { res, code, success, data, message, error = null } = props;
  
  res.status(code).send({
    success,
    message,
    data,
    code,
    error: JSON.stringify(error),
    timestamp: new Date().toISOString(),
  });
}

export const Notification = (props) => {
  const { dispatch, message, type } = props;
  const config = { Title: message, Type: type, Visibility: true };

  dispatch(ShowNotification(config));
  setTimeout(() => dispatch(HideNotification()), NOTIFICATION_TIME);
};