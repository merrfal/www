import { Category } from '../../models';
import { Response } from '../../utils';

export default async function CategoryDelete(req, res) {
  try {
    const category = await Category.findByIdAndDelete(req.query.id);

    if (category) Response(res, 200, true, 'Kjo kategori u fshi me sukses.', null)
    else Response(res, 404, false, 'Kjo kategori nuk u fshi.', null)
  } catch (error) {
    Response(res, 500, false, 'Gabim i brendshëm i serverit gjatë fshirjes së kësaj kategorie.', null)
  }
}
