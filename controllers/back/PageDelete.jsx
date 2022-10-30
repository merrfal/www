import { Page } from '../../models';

export default async function connection(req, res) {
  try {
    const page = await Page.findByIdAndDelete(req.query.id);
    console.log('ha', req.query)
    if (page) {
      res.status(200).send({
        status: true,
        message: 'Landing page was deleted successfully.',
        data: null,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: false,
        message: 'Landing page was not deleted.',
        data: null,
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Internal server error while deleting the landing page.',
      sysError: error,
      data: null,
      code: 500,
    });
  }
}
