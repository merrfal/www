import { Category } from '../../models';
import { Response } from '../../utils';

export default async function CategoryList(req, res) {
  try {
    const categories = await Category.find({});

    if (categories) Response(res, 200, true, 'Të gjitha kategoritë janë marrë me status.', categories)
    else Response(res, 404, false, 'Nuk u gjet asnjë kategori.', null)
  } catch (error) {
    Response(res, 404, false, 'Gabim i brendshëm i serverit gjatë ngarkimit të kategorive.', null)
  }
}