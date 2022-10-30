import { SetUser } from '../../data/redux/UserSlice';
import { ConfigBuilder, Notifier } from '../../utils';

const UserAuth = async (dispatch, id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserAuth/${id}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetUser(res.data)); 
    else {
        Notifier(
          {
            dispatch: dispatch,
            notificationMessage: `Something wen't wrong trying to authenticate you!`,
            notificationType: 'error',
          }
        );
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        notificationMessage: `Something wen't wrong trying to authenticate you!`,
        notificationType: 'error',
      }
    );
  }
};

export default UserAuth;
