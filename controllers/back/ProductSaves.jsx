import { Product, User } from '../../models';
import { Response } from '../../utils';

export default async function ProductSaves(req, res) {
  try {
    const userId = req.query.userId;
    const user = await User.findById(userId);
    const savesIds = user.Favorites;

    const products = [];

    for (let i = 0; i < savesIds.length; i++) {
      const current = savesIds[i];

      if(current.length === 24){
        const product = await Product.findById(current);
        products.push(product);
      }
    }

    if (products) Response(res, 200, true, "Produktet tuaja të ruajtura u morën me sukses.", products);
    else Response(res, 404, false, "Produktet tuaja të ruajtura nuk u morën me sukses.", null);
  } catch (err) {
    Response(res, 500, false, "Produktet tuaja të ruajtura nuk u morën me sukses për shkak të një gabimi të serverit.", null);
  }
}