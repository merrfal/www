import { ConfigBuilder, Notifier } from '../../utils';
import { SetPage } from '../../data/redux/PageSlice';

const PageView = async (dispatch, slug) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductView/${slug}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      dispatch(SetPage(res.data))
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
  } 
  catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        Title: '',
        Type: 'error',
      }
    );
  }
};

export default PageView;