import { Product } from '../../models';

export default async function ProductDelete(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.query.id);

    if (product) {
      res.status(200).send({
        status: true,
        message: 'Produkti u fshi me sukses.',
        data: null,
        code: 200,
      });
    } 
    
    else {
      res.status(404).send({
        status: false,
        message: 'Produkti nuk u fshi nga platforma.',
        data: null,
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Gabim i brendshëm i serverit gjatë fshirjes së produktit nga platforma.',
      sysError: error,
      data: null,
      code: 500,
    });
  }
}
