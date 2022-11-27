import { Product } from '../../models';

export default async function ProductUpdate(req, res) {
  try {
    const data = req.body;
    const id = req.query.id;
    console.log("daataa", data)
    const product = await Product.findByIdAndUpdate(id, data, { new: true });

    if (product) {
      res.status(200).send({
        status: true,
        message: 'Produkti u përditësua me sukses, këto ndryshime do të ndikojnë menjëherë në platformë.',
        data: product,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: true,
        message: 'Produkti nuk u përditësua për shkak të disa gabimeve.',
        data: product,
        code: 404,
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: 'Gabim i brendshëm i serverit gjatë përditësimit të produktit.',
      sysError: err,
      data: null,
      code: 500,
    });
  }
}
