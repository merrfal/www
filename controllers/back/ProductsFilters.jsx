import { Product } from "../../models";
import { Response } from "../../utils";

export default async function ProductsFilters(req, res) {
  try {
    const { Cities, Categories } = req.body;

    const products = await Promise.all([
      ...Cities.map(async (City) => Product.find({ City })),
      ...Categories.map(async (Category) => Product.find({ Category }))
    ]);

    const allProducts = products.slice();
    const collectedProducts = [];

    for(let i = 0; i < allProducts.length; i++) collectedProducts.push(...allProducts[i]);

    if (products.length > 0) Response(res, 200, true, "Të gjitha produktet u morën me sukses.", collectedProducts);
    else Response(res, 404, false, "Asnjë produkt nuk u gjet në platformë.", null);
  } catch (error) {
    Response(res, 500, false, "Gabim i brendshëm i serverit gjatë gjetjes së produkteve.", null);
  }
}
