import { ConfigBuilder, Notifier } from '../../utils';

const UserUpdate = async (dispatch, profile) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserUpdate/${profile.Id}`;
  const config = ConfigBuilder('P', 'JSON', profile, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      Notifier(
        {
          dispatch: dispatch,
          notificationMessage: res.message,
          notificationType: 'success',
        }
      );
    } else {
        Notifier(
          {
            dispatch: dispatch,
            notificationMessage: res.message,
            notificationType: 'error',
          }
        );
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        notificationMessage: `Something wen't wrong trying to update your profile.`,
        notificationType: 'error',
      }
    );
  }
};

export default UserUpdate;
