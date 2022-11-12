import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const data = req.body;
    const id = req.query.id;
    const category = await Category.findByIdAndUpdate(id, data, { new: true });

    if (Category) {
      res.status(200).send({
        status: true,
        message: 'Kategoria u përditësua me sukses, këto ndryshime do të ndikojnë menjëherë në platformë.',
        data: category,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: true,
        message: 'Kategoria nuk u përditësua për shkak të disa gabimeve.',
        data: null,
        code: 404,
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: 'Gabim i brendshëm i serverit gjatë përditësimit të kategorisë.',
      sysError: err,
      data: null,
      code: 500,
    });
  }
}
