import { ConfigBuilder, Notifier } from '../../utils';
import { UnsetPrepage } from '../../data/redux/PageSlice';

const ProductCreate = async (page, dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductCreate`;
  const config = ConfigBuilder('P', 'JSON', page, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      Notifier(
        {
          dispatch: dispatch,
          Title: res.message,
          Type: 'success',
        }
      );

      dispatch(UnsetPrepage());

      window.location.href="/produktet/" + res.data.Slug;
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
        Title: "Something wen't wrong while creating this page.",
        Type: 'error',
      }
    );
  }
};

export default ProductCreate;
