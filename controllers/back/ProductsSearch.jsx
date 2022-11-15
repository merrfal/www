import { Product } from '../../models';
import { Searcher } from '../../utils'

export default async function ProductsSearch(req, res) {
  try {
    const unfiltered = await Product.find({});
    const term = req.body.term;

    const products = Searcher(unfiltered, term);

    if (products) {
      res.status(200).send(
        {
          status: true,
          message: 'Këto produktet u gjeten me këtë fjalën specifike.',
          data: products,
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Asnjë produkt nuk u gjet në platformë me këtë fjalë specifike..',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë kërkimit të produkteve me këtë term specifik.',
        sysError: error,
        data: null,
        code: 404,
      }
    );
  }
}