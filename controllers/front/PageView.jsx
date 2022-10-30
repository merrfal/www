import { ConfigBuilder, Notifier } from '../../utils';
import { SetPage } from '../../data/redux/PageSlice';

const PageView = async (dispatch, slug) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/PageView/${slug}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetPage(res.data));
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
        notificationMessage: '',
        notificationType: 'error',
      }
    );
  }
};

export default PageView;