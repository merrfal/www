import {
  ShowNotification,
  HideNotification,
} from '../data/redux/NotificationSlice';

const Notifier = (props) => {
  props.dispatch(
    ShowNotification({
      Title: props.Title || '',
      Message: props.Message || '',
      Type: props.Type || 'success',
      Visibility: true,
    })
  );

  setTimeout(() => props.dispatch(HideNotification()), 3000);
};

export default Notifier;
