import { ConfigBuilder, Notifier } from '../../utils';
import { SetPages } from '../../data/redux/PagesSlice';

const PagesList = async (dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/PagesList`;
  const config = ConfigBuilder('G', 'JSON', {}, false, true, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetPages(res.data))
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
        notificationMessage: 'Internal server error while fetching the landing pages.',
        notificationType: 'error',
      }
    );
  }
};

export default PagesList;
