import { ConfigBuilder, Notifier } from '../../utils';
import { SetSearch } from '../../data/redux/SearchSlice';

const ProductsSearch = async (term, dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductsSearch`;
  const config = ConfigBuilder('P', 'JSON', {term}, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetSearch(res.data))
    else Notifier(dispatch, res.message, 'error');
  } catch (error) {
    Notifier(dispatch, '', 'error');
  }
};

export default ProductsSearch;
