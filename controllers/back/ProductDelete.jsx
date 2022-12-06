import { Product } from '../../models';
import { Response } from '../../utils';

export default async function ProductDelete(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.query.id);

    if (product) Response(res, 200, true, 'Produkti u fshi me sukses.', product) 
    else Response(res, 404, false, 'Produkti nuk u fshi nga platforma.', null) 
  } catch (error) {
    Response(res, 500, false, 'Gabim i brendshëm i serverit gjatë fshirjes së produktit nga platforma.', null) 
  }
}
