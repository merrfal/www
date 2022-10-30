import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const categories = await Category.find({});

    if (categories) {
      res.status(200).send(
        {
          status: true,
          message: 'All categories where fetched statusfully.',
          data: categories,
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'No categories where found.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while loading the categories.',
        sysError: error,
        data: null,
        code: 404,
      }
    );
  }
}