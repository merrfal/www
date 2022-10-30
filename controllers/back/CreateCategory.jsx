import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const _new = new Category(req.body);
    const _category = await _new.save();

    if (_category) {
      res.status(200).send(
        {
          status: true,
          message: 'New category was added to the Database.',
          data: _category,
          code: 200,
        }
      );

    } 
    else {
      res.status(400).send(
        {
          status: false,
          message: 'Something went wrong while trying to create a new category.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while creating this category.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
