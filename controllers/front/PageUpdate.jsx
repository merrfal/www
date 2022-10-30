import { ConfigBuilder, Notifier } from '../../utils';

const PageUpdate = async (dispatch, page) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/PageUpdate/${page._id}`;
  const config = ConfigBuilder('P', 'JSON', page, true, false, false);
  console.log('res', url, page)
  try {
    const req = await fetch(url, config);
    const res = await req.json();

    console.log('res', res, url)

    if (res.status === true) {
      window.location.reload();

      Notifier(
        {
          dispatch: dispatch,
          notificationMessage: res.message,
          notificationType: 'success',
        }
      );
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
        notificationMessage: "Something wen't wrong while updating the page.",
        notificationType: 'error',
      }
    );
  }
};

export default PageUpdate;
