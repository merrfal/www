import { SetUser } from '../../data/redux/UserSlice';
import { ConfigBuilder, Notifier } from '../../utils';
import { LogoutUser } from '../../data/redux/UserSlice'

const UserLogin = async (uid, dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserLogin/${uid}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetUser(res.data));
    else {
      Notifier(dispatch, res.message, 'error')
      dispatch(LogoutUser())
    }
  } catch (error) {
    Notifier(dispatch, '', 'error')
    dispatch(LogoutUser())
  }
};

export default UserLogin;
