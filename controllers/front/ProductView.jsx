import { ConfigBuilder, Notifier, Url } from '../../utils';
import { SetPage } from '../../data/redux/PageSlice';

const PageView = async (dispatch, setLoading, slug, mode) => {
  setLoading(true);

  const url = `${Url}/api/products/ProductView/${slug}`;
  const config = ConfigBuilder('G', 'JSON', {}, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) {
      dispatch(SetPage(res.data))
      setLoading(false);
    }

    else Notifier(dispatch, res.message, 'error')
  } 
  catch (error) { Notifier(dispatch, '', 'error') }
};

export default PageView;