import { ConfigBuilder, Notifier } from '../../utils';
import { SetCategories } from '../../data/redux/CategorySlice';

const CategoryList = async (dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/category/CategoryList`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetCategories(res.data))
    else {
      Notifier(
        {
          dispatch: dispatch,
          notificationMessage: res.message,
          notificationType: 'error',
        }
      );
    }
  } catch (error) {
    Notifier(
      {
        dispatch: dispatch,
        notificationMessage: 'Internal server error while fetching the categories.',
        notificationType: 'error',
      }
    );
  }
};

export default CategoryList;
