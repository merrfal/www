import { ConfigBuilder, Notifier } from '../../utils';
import { SetUserLandingPages } from '../../data/redux/UserLandingPagesSlice';

const UserLandingList = async (dispatch, id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserLandingList/${id}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();
    
    if (res.status === true) dispatch(SetUserLandingPages(res.data))
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
        Title: 'Internal server error while fetching the landing pages.',
        Type: 'error',
      }
    );
  }
};

export default UserLandingList;
