import { Product } from "../../models";
import { Response } from "../../utils";

export default async function ProductsFilters(req, res) {
  try {
    const { Cities, Categories, Sort } = req.body;

    let products = [];
    let promises = [];

    if (Cities.length > 0) {
      Cities.map(async (city) => {
        const results = await Product.find({ City: city });
        promises.push(results);
      });
    }

    if (Categories.length > 0) {
      Categories.map(async (category) => {
        const results = await Product.find({ Category: category });
        promises.push(results);
      });
    }

    // switch(Sort){
    //   case 'pouplar':
    //     products = products.sort({Votes: []})
    //   break;

    //   case 'unpopular':
    //     products = products.sort({Votes: []})
    //   break;

    //   case 'newest':
    //     products = products.sort({createdAt: 1})
    //   break;

    //   case 'oldest':
    //     products = products.sort({createdAt: -1})
    //   break;
    // }

    await Promise.all(citiesPromises).then((res) => console.log(res))

    if (products) Response( res, 200, true, "Të gjitha produktet u morën me sukses.", products);
    else Response(res, 404, false, "Asnjë produkt nuk u gjet në platformë.", null);
  } catch (error) {
    Response( res, 500, false, "Gabim i brendshëm i serverit gjatë gjetjes së produkteve.", null);
  }
}
