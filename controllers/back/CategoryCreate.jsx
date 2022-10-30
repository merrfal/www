import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const data = req.body;
    const id = req.query.id;
    const category = await Category.findByIdAndUpdate(id, data, { new: true });

    if (category) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing page was updated successfully.',
          data: category,
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: true,
          message: 'Landing page was not updated.',
          data: category,
          code: 404,
        }
      );
    }
  } catch (err) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while updating this category.',
        sysError: err,
        data: null,
        code: 500,
      }
    );
  }
}
