import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const category = await Category.findByIdAndDelete(req.query.id);

    if (category) {
      res.status(200).send(
        {
          status: true,
          message: 'This category was deleted successfully.',
          data: null,
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: false,
          message: 'This category was not deleted.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while deleting this category.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
