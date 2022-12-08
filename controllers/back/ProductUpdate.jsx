import { Product } from '../../models';
import { Response } from '../../utils';

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
      "UserShow": body.UserShow,
      "Status": body.Status,
      "Zip": body.Zip,
      "Address": body.Address,
      "City": body.City,
      "Country": body.Country,
    };

    const id = req.query.id;
    const product = await Product.findByIdAndUpdate(id, { $set: data }, { new: true });

    if (product) Response(res, 200, true, "Produkti u përditësua me sukses, këto ndryshime do të ndikojnë menjëherë në platformë.", product);
    else Response(res, 404, false, "Produkti nuk u përditësua për shkak të disa gabimeve.", null);
  } catch (err) {
    Response(res, 500, false, "Gabim i brendshëm i serverit gjatë përditësimit të produktit.", null);
  }
}
