import {
  ShowNotification,
  HideNotification,
} from '../data/redux/NotificationSlice';

const Notifier = (props) => {
  props.dispatch(
    ShowNotification({
      notificationTitle: props.notificationTitle || '',
      notificationMessage: props.notificationMessage || '',
      notificationType: props.notificationType || 'success',
      notificationIsShowing: true,
    })
  );

  setTimeout(() => props.dispatch(HideNotification()), 3000);
};

export default Notifier;
