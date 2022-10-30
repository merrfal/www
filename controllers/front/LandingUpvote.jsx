import { ConfigBuilder, Notifier } from '../../utils';
import { PagesList, PageView } from './';

const LandingDownvote = async (landingId, userId, dispatch, target = 'Pages', landingSlug = "") => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/LandingUpvote/${landingId}/${userId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      if(target === 'Page') PageView(dispatch, landingSlug);
      else PagesList(dispatch);
    }

    else {
      Notifier(
        {
          dispatch: dispatch,
          notificationMessage: res.message,
          notificationType: 'error',
        }
      );
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        notificationMessage: res.message,
        notificationType: 'error',
      }
    );
  }
};

export default LandingDownvote;
