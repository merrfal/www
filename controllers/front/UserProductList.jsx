import { ConfigBuilder, Notifier } from '../../utils';
import { SetUserLandingPages } from '../../data/redux/UserLandingPagesSlice';

const UserProductList = async (dispatch, id) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserProductList/${id}`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();
    console.log('res', res)
    
    if (res.status === true) dispatch(SetUserLandingPages(res.data))
    else Notifier(dispatch, res.message, 'error')
  } catch (error) {
    Notifier(dispatch, '', 'error')
  }
};

export default UserProductList;
