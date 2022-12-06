import { ConfigBuilder, Notifier } from '../../utils';

const UserDelete = async (dispatch, id) => {
  setLoading(true);
  
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users/UserDelete/${id}`;
  const config = ConfigBuilder('D', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) Notifier(dispatch, res.message, 'success')
    else Notifier(dispatch, res.message, 'error')
  } 
  catch (error) {
    Notifier(dispatch, '', 'error')
  }
};

export default UserDelete;
