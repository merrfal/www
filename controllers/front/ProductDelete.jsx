import { ConfigBuilder, Notifier } from '../../utils';
import { UserProductList } from '.';

const ProductDelete = async (dispatch, productId, userId, redirect = null) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductDelete/${productId}`;
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
