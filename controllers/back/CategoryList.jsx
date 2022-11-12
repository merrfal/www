import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const categories = await Category.find({});

    if (categories) {
      res.status(200).send(
        {
          status: true,
          message: 'Të gjitha kategoritë janë marrë me status.',
          data: categories,
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Nuk u gjet asnjë kategori.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë ngarkimit të kategorive.',
        sysError: error,
        data: null,
        code: 404,
      }
    );
  }
}