import { Product } from '../../models';
import { Response } from '../../utils';

export default async function connection(req, res) {
  try {
    let path = req.body.Name;
    path = path.toLowerCase().replace(/ /g, '-');
    
    const _new = new Product({ ...req.body, Slug: path, createdAt: new Date() });
    const product = await _new.save();

    if (product) Response(res, 200, true, 'Produkti u publikua me sukses.', product) 
    else Response(res, 404, false, 'Produkti nuk u krijua për shkak të disa gabimeve.', null)
  } catch (error) {
    Response(res, 500, false, 'Gabim i brendshëm i serverit gjatë publikimit të produktit.', null);
  }
}
