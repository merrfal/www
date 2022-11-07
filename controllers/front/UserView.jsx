import { ConfigBuilder, Notifier } from '../../utils';
import { SetProfile } from '../../data/redux/ProfileSlice';

const UserView = async (dispatch, username) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserView/${username}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);
  
  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetProfile(res.data));
    else {
      Notifier({
        dispatch: dispatch,
        Title: res.message,
        Type: 'error',
      });
    }
  } catch (error) {
    Notifier({
      dispatch: dispatch,
      Title: '',
      Type: 'error',
    });
  }
};

export default UserView;
