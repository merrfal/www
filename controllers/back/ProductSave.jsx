import { Product } from '../../models';

export default async function connection(req, res) {
  try {
    const userId = req.query.userId;
    const productId = req.query.productId;

    const product = await Product.findById(productId);
    let productList = product.Upvotes;

    if (productList.includes(userId)) {
      res.status(401).send(
        {
          status: true,
          message: 'Përdoruesi tashmë e ka këtë produkt në listën e të preferuarave.' ,
          data: null,
          code: 200,
        }
      );
    }
    
    else productList.push(userId);

    const updatedLandingPage = await Product.findByIdAndUpdate(
      productId,
      { Upvotes: productList },
      { new: true }
    );

    if (updatedLandingPage) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing page was updated successfully.',
          data: updatedLandingPage,
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