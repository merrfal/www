import { ConfigBuilder, Notifier, Url } from '../../utils';
import { UserProductList } from '.';

const ProductDelete = async (dispatch, productId, userId, redirect = null) => {
  const url = `${Url}/api/products/ProductDelete/${productId}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) { 
      Notifier(dispatch, res.message, 'success');
      UserProductList(dispatch, userId);
      if(redirect !== null) window.location.href = redirect;
    }
    
    else Notifier(dispatch, res.message, 'error');
  } catch (error) {
    Notifier(dispatch, '', 'error');
  }
};

export default ProductDelete;
