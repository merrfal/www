import { ConfigBuilder, Notifier } from '../../utils';
import { SetFilter } from '../../data/redux/FilterSlice';

const ProductsFilters = async (Cities, Categories, Sort, dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductsFilters`;
  const config = ConfigBuilder('P', 'JSON', {Cities, Categories, Sort}, true, false, false);

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
