import { Product, User } from '../../models';

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

    if (products) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing page was updated successfully.',
          data: products,
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: true,
          message: 'Landing page was not updated.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë favorizimit të produktit.',
        sysError: err,
        data: null,
        code: 500,
      }
    );
  }
}