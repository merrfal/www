import { Product } from "../../models";
import { Response } from "../../utils";

export default async function ProductsFilters(req, res) {
  try {
    const { Cities, Categories } = req.body;

    let products = [];
    let promises = [];

    if (Cities.length > 0) {
      Cities.map(async (city) => {
        const results = await Product.find({ City: city });
        return promises.push(results);
      });
    }

    if (Categories.length > 0) {
      Categories.map(async (category) => {
        const results = await Product.find({ Category: category });
        return promises.push(results);
      });
    }

    const results = await Promise.all(promises);
    results.map((result) => products.push(result));

    if (products.length > 0) Response( res, 200, true, "Të gjitha produktet u morën me sukses.", products);
    else Response(res, 404, false, "Asnjë produkt nuk u gjet në platformë.", null);
  } catch (error) {
    Response( res, 500, false, "Gabim i brendshëm i serverit gjatë gjetjes së produkteve.", null);
  }
}
