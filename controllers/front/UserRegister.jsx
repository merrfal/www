import { SetUser } from '../../data/redux/UserSlice';
import { ConfigBuilder, Notifier } from '../../utils';

const UserRegister = async (user, dispatch, informations) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserRegister`;

  const Name = user.displayName.split(' ')[0] || '';
  const Surname = user.displayName.split(' ')[1] || '';
  const Email = user.email || '';
  const Avatar = user.photoURL || null;

  const User = {
    Uid: user.uid,
    Name,
    Surname,
    Email,
    Password: Math.random().toString(36).substring(2, 15),
    Avatar,
    Info: informations,
  };

  const config = ConfigBuilder('P', 'JSON', User, true);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetUser(res.data));
    else {
      Notifier({
        dispatch: dispatch,
        notificationMessage: res.message,
        notificationType: 'error',
      });
    }
  } catch (error) {
    Notifier({
      dispatch: dispatch,
      notificationMessage: '',
      notificationType: 'error',
    });
  }
};

export default UserRegister;
