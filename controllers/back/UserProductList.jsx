import { Product } from '../../models';
import { Response } from '../../utils';

export default async function UserProductList(req, res) {
  try {
    const products = await Product.find({ User: req.query.id }).sort({createdAt: -1});

    if (products) Response(res, 200, true, "Produktet e përdoruesit u morën me sukses.", products);
    else Response(res, 404, false, "Përdoruesi nuk ka ngarkuar ende asnjë produkt, asgjë nuk u gjet në llogarinë e tij.", null);
  } catch (error) {
    Response(res, 500, false, "Gabim i brendshëm i serverit gjatë gjetjes së produkteve të përdoruesit.", null);
  }
}
