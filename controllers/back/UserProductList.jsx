import { Product } from '../../models';

export default async function UserProductList(req, res) {
  try {
    const products = await Product.find({ User: req.query.id }).sort({createdAt: -1});

    if (products) {
      res.status(200).send(
        {
          status: true,
          message: 'Produktet e përdoruesit u morën me sukses.',
          data: products,
          code: 200,
        }
      );
    } 
    
    else {
      res.status(404).send(
        {
          status: false,
          message: 'Përdoruesi nuk ka ngarkuar ende asnjë produkt, asgjë nuk u gjet në llogarinë e tij.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë gjetjes së produkteve të përdoruesit.',
        sysError: error,
        data: null,
        code: 404,
      }
    );
  }
}
