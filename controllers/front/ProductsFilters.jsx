import { ConfigBuilder, Notifier } from '../../utils';
import { SetFilter } from '../../data/redux/FilterSlice';

const ProductsFilters = async (term, cityTerm, dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductsFilters`;
  const config = ConfigBuilder('P', 'JSON', {term, cityTerm}, true, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetFilter(res.data))
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
        Title: 'keq me filtrim',
        Type: 'error',
      }
    );
  }
};

export default ProductsFilters;
