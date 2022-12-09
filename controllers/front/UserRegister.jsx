import { SetUser } from '../../data/redux/UserSlice';
import { ConfigBuilder, Notifier, Url } from '../../utils';

const UserRegister = async (user, dispatch, informations) => {
  const url = `${Url}/api/users/UserRegister`;

  const Name = user.displayName.split(' ')[0] || '';
  const Surname = user.displayName.split(' ')[1] || '';
  const Email = user.email || '';
  const Avatar = user.photoURL || null;

  const User = {
    Uid: user.uid,
    Name,
    Surname,
    Email,
    Avatar,
    Info: informations,
  };

  const config = ConfigBuilder('P', 'JSON', User, true);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetUser(res.data));
    else Notifier(dispatch, res.message, 'error')
  } catch (error) {
    Notifier(dispatch, '', 'error')
  }
};

export default UserRegister;
