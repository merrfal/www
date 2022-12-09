import { ConfigBuilder, Notifier, Url } from '../../utils';
import { ProductSaves } from './';
import { SetFavorites } from '../../data/redux/UserSlice';

const ProductSave = async (productId, userId, newFavorites, setIsSaving, dispatch) => {
  setIsSaving(true);

  const url = `${Url}/api/products/ProductSave/${productId}/${userId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      dispatch(SetFavorites(newFavorites));
      ProductSaves(userId, dispatch);
    }
    
    else Notifier(dispatch, res.message, 'error');
  } catch (error) {
    Notifier(dispatch, '', 'error');
  }
  finally{
    setIsSaving(false);
  }
};

export default ProductSave;
