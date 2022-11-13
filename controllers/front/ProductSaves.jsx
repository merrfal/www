import { ConfigBuilder, Notifier } from '../../utils';
import { SetFavorites } from '../../data/redux/FavoritesSlice';

const ProductSaves = async (userId, dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductSaves/${userId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetFavorites(res.data));
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
        Title: res.message,
        Type: 'error',
      }
    );
  }
};

export default ProductSaves;
