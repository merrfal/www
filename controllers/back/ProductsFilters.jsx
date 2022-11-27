import { Product } from '../../models';

export default async function ProductsFilters(req, res) {
  try {
    const term = req.body.term;
    const cityTerm = req.body.cityTerm;
    console.log("term", term)
    let products =  []
    if (term === '' && cityTerm !== '') {
      products = await Product.find({ City: cityTerm }).sort({createdAt: -1});
    }
    else if (term !== '' && cityTerm === '') {
      products = await Product.find({ Category: term }).sort({createdAt: -1});
    }
    else if (term !== '' && cityTerm !== '') {
      products = await Product.find({ Category: term, City: cityTerm }).sort({createdAt: -1});
    }
    else {
      products = await Product.find({}).sort({createdAt: -1});
    }


    if (products) {
      res.status(200).send(
        {
          status: true,
          message: 'Të gjitha produktet u morën me sukses.',
          data: products,
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Asnjë produkt nuk u gjet në platformë.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë gjetjes së produkteve.',
        sysError: error,
        data: null,
        code: 404,
      }
    );
  }
}