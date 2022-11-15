import { SetUser } from '../../data/redux/UserSlice';
import { ConfigBuilder, Notifier } from '../../utils';
import { LogoutUser } from '../../data/redux/UserSlice';

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
            Title: `Something wen't wrong trying to authenticate you!`,
            Type: 'error',
          }
        );

      dispatch(LogoutUser());
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        Title: `Something wen't wrong trying to authenticate you!`,
        Type: 'error',
      }
    );

    dispatch(LogoutUser());
  }
};

export default UserAuth;
