import { ConfigBuilder, Notifier } from '../../utils';

const PageCreate = async (dispatch, page) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/PageCreate`;
  const config = ConfigBuilder('P', 'JSON', page, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      dispatch(UnsetPrepage());

      window.location.href="/posts"

      Notifier(
        {
          dispatch: dispatch,
          notificationMessage: res.message,
          notificationType: 'success',
          // viewPage: true,
          // viewPage: `/landings/${res.data.Slug}`,
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
        notificationMessage: "Something wen't wrong while creating this page.",
        notificationType: 'error',
      }
    );
  }
};

export default PageCreate;
