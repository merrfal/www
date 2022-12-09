import { ConfigBuilder, Notifier, Url } from '../../utils';
import { SetPages } from '../../data/redux/PagesSlice';

const PagesList = async (dispatch) => {
  const url = `${Url}/api/products/ProductsList`;
  const config = ConfigBuilder('G', 'JSON', {}, false, true, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetPages(res.data))
    else Notifier(dispatch, res.message, 'error');
  } catch (error) {
    Notifier(dispatch, '', 'error');
  }
};

export default PagesList;
