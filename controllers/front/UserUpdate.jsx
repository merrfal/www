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
          Title: res.message,
          Type: 'success',
        }
      );
    } else {
        Notifier(
          {
            dispatch: dispatch,
            Title: res.message,
            Type: 'error',
          }
        );
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        Title: `Something wen't wrong trying to update your profile.`,
        Type: 'error',
      }
    );
  }
};

export default UserUpdate;
