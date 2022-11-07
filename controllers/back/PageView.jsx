import { Page } from '../../models';

export default async function connection(req, res) {
  try {
    const page = await Page.find({ Slug: req.query.slug });

    let Views = parseInt(page[0].Views);
    Views = Views + 1;

    const product = await Page.findOneAndUpdate({Slug: req.query.slug}, {Views: Views}, {new: true})

    if (product) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing page was fetched successfully.',
          data: product,
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: false,
          message: 'Landing page was not fetched.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while fetching the landing page.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
