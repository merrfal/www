import { ConfigBuilder, Notifier } from '../../utils';
import {UserLandingList} from '.';

const PageDelete = async (dispatch, landingId, userId, redirect = null) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/PageDelete/${landingId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      UserLandingList(dispatch, userId);
      
      if(redirect !== null) window.location.href = redirect;
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
        Title: '',
        Type: 'error',
      }
    );
  }
};

export default PageDelete;
