import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const category = await Category.findByIdAndDelete(req.query.id);

    if (category) {
      res.status(200).send(
        {
          status: true,
          message: 'Kjo kategori u fshi me sukses.',
          data: null,
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: false,
          message: 'Kjo kategori nuk u fshi.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë fshirjes së kësaj kategorie.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
