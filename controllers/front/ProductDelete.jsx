import { ConfigBuilder, Notifier } from '../../utils';
import { UserProductList } from '.';

const ProductDelete = async (dispatch, landingId, userId, redirect = null) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductDelete/${landingId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      UserProductList(dispatch, userId);
      if(redirect !== null) window.location.href = redirect;
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
        Title: '',
        Type: 'error',
      }
    );
  }
};

export default ProductDelete;
