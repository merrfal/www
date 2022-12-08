import { Category } from '../../models';
import { Response } from '../../utils';

export default async function CategoryCreate(req, res) {
  try {
    const _new = new Category(req.body);
    const _category = await _new.save();

    if (_category) Response(res, 200, true, 'Kategoria e re u shtua në bazën e të dhënave.', _category)
    else Response(res, 404, false, 'Ndodhi një gabim gjatë përpjekjes për të krijuar një kategori të re.', null)
  } catch (error) {
    Response(res, 500, false, 'Gabim i brendshëm i serverit gjatë krijimit të kësaj kategorie.', null)
  }
}
