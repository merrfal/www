import { SetUser } from '../../data/redux/UserSlice';
import { ConfigBuilder, Notifier, Url } from '../../utils';
import { LogoutUser } from '../../data/redux/UserSlice';

const UserAuth = async (dispatch, id) => {
  const url = `${Url}/api/users/UserAuth/${id}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetUser(res.data)); 
    else {
      Notifier(dispatch, '', 'error')
      dispatch(LogoutUser());
    }
  } catch (error) {
    Notifier(dispatch, '', 'error')
    dispatch(LogoutUser());
  }
};

export default UserAuth;
