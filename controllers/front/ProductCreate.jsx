import { ConfigBuilder, Notifier } from '../../utils';

const ProductCreate = async (dispatch, page) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductCreate`;
  const config = ConfigBuilder('P', 'JSON', page, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

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

export default ProductCreate;
