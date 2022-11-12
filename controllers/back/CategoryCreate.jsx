import { Category } from '../../models';

export default async function connection(req, res) {
  try {
    const _new = new Category(req.body);
    const _category = await _new.save();

    if (_category) {
      res.status(200).send(
        {
          status: true,
          message: 'Kategoria e re u shtua në bazën e të dhënave.',
          data: _category,
          code: 200,
        }
      );

    } 
    else {
      res.status(400).send(
        {
          status: false,
          message: 'Ndodhi një gabim gjatë përpjekjes për të krijuar një kategori të re.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë krijimit të kësaj kategorie.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
