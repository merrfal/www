import { Product } from '../../models';

export default async function ProductUpdate(req, res) {
  try {
    const body = req.body;
    const data = {
      "Name": body.Name,
      "Phone": body.Phone,
      "Description": body.Description,
      "Gallery": body.Gallery,
      "Category": body.Category,
      "Views": body.Views,
      "Zip": body.Zip,
      "Address": body.Address,
      "City": body.City,
      "Country": body.Country,
    };
    const id = req.query.id;
    console.log("quety", id)
    const product = await Product.findByIdAndUpdate(id, { $set: data }, { new: true });

    console.log("product", product)

    if (product) {
      res.status(200).send({
        status: true,
        message: 'Produkti u përditësua me sukses, këto ndryshime do të ndikojnë menjëherë në platformë.',
        data: product,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: true,
        message: 'Produkti nuk u përditësua për shkak të disa gabimeve.',
        data: product,
        code: 404,
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: 'Gabim i brendshëm i serverit gjatë përditësimit të produktit.',
      sysError: err,
      data: null,
      code: 500,
    });
  }
}
