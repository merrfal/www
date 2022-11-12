import { ConfigBuilder, Notifier } from '../../utils';

const PageUpdate = async (dispatch, page) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductUpdate/${page._id}`;
  const config = ConfigBuilder('P', 'JSON', page, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    console.log('res', res, url)

    if (res.status === true) {
      window.location.reload();

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
    Notifier(
      {
        dispatch: dispatch,
        Title: "Something wen't wrong while updating the page.",
        Type: 'error',
      }
    );
  }
};

export default PageUpdate;
