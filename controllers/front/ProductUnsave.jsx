import { ConfigBuilder, Notifier } from '../../utils';
import { ProductSaves } from './';
import { SetFavorites } from '../../data/redux/UserSlice';

const LandingDownvote = async (productId, userId, newFavorites, setIsSaving, dispatch) => {
  setIsSaving(true);
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductUnsave/${productId}/${userId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      dispatch(SetFavorites(newFavorites));
      ProductSaves(userId, dispatch);
    }
    
    else {
      Notifier({
        dispatch: dispatch,
        Title: res.message,
        Type: 'error',
      });
    }
  } catch (error) {
    Notifier({
      dispatch: dispatch,
      Title: 'Problem',
      Type: 'error',
    });
  }
  finally{
    setIsSaving(false);
  }
};

export default LandingDownvote;
