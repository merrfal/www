import { Page } from '../../models';

export default async function connection(req, res) {
  try {
    const data = req.body;
    const id = req.query.id;
    const product = await Page.findByIdAndUpdate(id, data, { new: true });

    if (product) {
      res.status(200).send({
        status: true,
        message: 'Landing page was updated successfully.',
        data: product,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: true,
        message: 'Landing page was not updated.',
        data: product,
        code: 404,
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: 'Internal server error while updating the landing page.',
      sysError: err,
      data: null,
      code: 500,
    });
  }
}
