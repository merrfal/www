import { ConfigBuilder, Notifier } from '../../utils';

const UserDelete = async (dispatch, id) => {
  setLoading(true);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserDelete/${id}`;
  const config = ConfigBuilder('D', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      Notifier(
        {
          dispatch: dispatch,
          Title: res.message,
          Type: 'error',
        }
      );
    }
    else {
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
        Title: `Something wen't wrong trying to authenticate you!`,
        Type: 'error',
      }
    );
  }
};

export default UserDelete;
