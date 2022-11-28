import { ConfigBuilder, Notifier } from '../../utils';
import { SetSearch } from '../../data/redux/SearchSlice';

const ProductsSearch = async (term, dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductsSearch`;
  const config = ConfigBuilder('P', 'JSON', {term}, true, false, false);

  console.log("url", url)
  console.log("url", term)
  console.log("config", config)

  try {
    const req = await fetch(url, config);
    const res = await req.json();
    console.log('res', res)

    if (res.status === true) dispatch(SetSearch(res.data))
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
        Title: 'Gabim i klientit gjatë kërkimit të produkteve me këtë term specifik.',
        Type: 'error',
      }
    );
  }
};

export default ProductsSearch;
