import { ConfigBuilder, Notifier, Url } from '../../utils';
import { SetFilter } from '../../data/redux/FilterSlice';

const ProductsFilters = async (Cities, Categories, dispatch) => {
  const url = `${Url}/api/products/ProductsFilters`;
  const config = ConfigBuilder('P', 'JSON', {Cities, Categories}, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetFilter(res.data))
    else Notifier(dispatch, res.message, 'error');
  } catch (error) {
    Notifier(dispatch, '', 'error');
  }
};

export default ProductsFilters;
