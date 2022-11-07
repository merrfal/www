import { ConfigBuilder, Notifier } from '../../utils';
import { SetCategories } from '../../data/redux/CategoriesSlice';

const CategoryList = async (dispatch) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories/CategoryList`;
  const config = ConfigBuilder('G', 'JSON', {}, false, false, false);

  try {
    const req = await fetch(url, config);
    const res = await req.json();

    if (res.status === true) dispatch(SetCategories(res.data))
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
        Title: 'Internal server error while fetching the categories.',
        Type: 'error',
      }
    );
  }
};

export default CategoryList;
