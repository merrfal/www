import { ConfigBuilder, Notifier } from '../../utils';
import { SetPage } from '../../data/redux/PageSlice';

const PageView = async (slug, setLoading, dispatch) => {
  setLoading(true);

  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/ProductView/${slug}`;
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