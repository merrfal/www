import { Product } from '../../models';
import { Searcher, Response } from '../../utils'

export default async function ProductsSearch(req, res) {
  try {
    const unfiltered = await Product.find({});
    const term = req.body.term;

    const products = Searcher(unfiltered, term);

    if (products) Response(res, 200, true, "Këto produktet u gjeten me këtë fjalën specifike.", products);
    else Response(res, 404, false, "Asnjë produkt nuk u gjet në platformë me këtë fjalë specifike.", null);
  } catch (error) {
    Response(res, 500, false, "Gabim i brendshëm i serverit gjatë kërkimit të produkteve me këtë term specifik.", null);
  }
}