import { ConfigBuilder, Notifier } from '../../utils';

const PageCreate = async (dispatch, page) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/pages/PageCreate`;
  const config = ConfigBuilder('P', 'JSON', page, false, false, false);
  console.log('res', page, config, url)

  try {
    const req = await fetch(url, config);
    const res = await req.json();
    console.log('res', res)

    if (res.status === true) {
      dispatch(UnsetPrepage());

      window.location.href="/produktet/" + res.data._id;

      Notifier(
        {
          dispatch: dispatch,
          Title: res.message,
          Type: 'success',
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
    console.log('res', error)
    Notifier(
      {
        dispatch: dispatch,
        Title: "Something wen't wrong while creating this page.",
        Type: 'error',
      }
    );
  }
};

export default PageCreate;
