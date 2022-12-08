import { Category } from '../../models';
import { Response } from '../../utils';

export default async function CategoryUpdate(req, res) {
  try {
    const data = req.body;
    const id = req.query.id;
    
    const category = await Category.findByIdAndUpdate(id, data, { new: true });

    if (Category) Response(res, 200, true, 'Kategoria u përditësua me sukses, këto ndryshime do të ndikojnë menjëherë në platformë.', category)
    else Response(res, 404, false, 'Kategoria nuk u përditësua për shkak të disa gabimeve.', null)
  } catch (err) {
    Response(res, 500, false, 'Gabim i brendshëm i serverit gjatë përditësimit të kategorisë.', null)
  }
}
