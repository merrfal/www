import { Product, User } from '../../models';

export default async function connection(req, res) {
  try {
    const productPre = await Product.find({ Slug: req.query.slug });

    let Views = parseInt(productPre[0].Views);
    Views = Views + 1;

    let product = await Product.findOneAndUpdate(
      { Slug: req.query.slug },
      { Views: Views },
      { new: true }
    );
    
    const others = await Product.find({Cateogry: product.Category}).limit(4)

    const user = await User.findById(product.User)
    console.log('user', user)

    product.User = user;

    if (product) {
      res.status(200).send({
        status: true,
        message: 'Produkti u mor me sukses.',
        data: {product, others},
        code: 200,
      });
    } else {
      res.status(404).send({
        status: false,
        message: 'Produkti nuk u mor për shkak të një gabimi ose nuk ekziston.',
        data: null,
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Produkti nuk u mor për shkak të një gabimi të brendshëm të serverit.',
      sysError: error,
      data: null,
      code: 500,
    });
  }
}
