import { ShowNotification, HideNotification } from '../data/redux/NotificationSlice';

const Notifier = (dispatch, message, type) => {
  const config = { Title: message, Type: type, Visibility: true}
  dispatch(ShowNotification(config));
  setTimeout(() => dispatch(HideNotification()), 5000);
};

export default Notifier;