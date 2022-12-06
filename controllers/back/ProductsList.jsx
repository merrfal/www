import { Product } from '../../models';
import { Response } from '../../utils';

export default async function ProductsList(req, res) {
  try {
    const allProducts = await Product.find({}).sort({createdAt: -1});
    const products = allProducts.filter((product) => product.Status === 'published');

    if (products) Response(res, 200, true, "Të gjitha produktet u morën me sukses.", products);
    else Response(res, 404, flse, "Asnjë produkt nuk u gjet në platformë.", null);
  } catch (error) {
    Response(res, 500, flse, "Gabim i brendshëm i serverit gjatë gjetjes së produkteve.", null);
  }
}