import { ConfigBuilder, Notifier } from '../../utils';
import { ProductsList, ProductView } from '.';

const LandingDownvote = async (landingId, userId, dispatch, target = 'Pages', landingSlug = "") => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductUnsave/${landingId}/${userId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      if(target === 'Page') ProductView(dispatch, landingSlug);
      else ProductsList(dispatch);
    }

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
      Title: res.message,
      Type: 'error',
    });
  }
};

export default LandingDownvote;
