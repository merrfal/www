import { Product } from '../../models';

export default async function connection(req, res) {
  try {
    let path = req.body.Name;
    path = path.toLowerCase().replace(/ /g, '-');
    const _new = new Product({ ...req.body, Slug: path });
    const product = await _new.save();

    if (product) {
      res.status(200).send(
        {
          status: true,
          message: 'Produkti u publikua me sukses.',
          data: product,
          code: 200,
        }
      );

    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Produkti nuk u krijua për shkak të disa gabimeve.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë publikimit të produktit.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
