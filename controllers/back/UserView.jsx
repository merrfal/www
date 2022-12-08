import { User, Product } from '../../models';
import { Response } from '../../utils';

export default async function UserView(req, res) {
  try {
    const user = await User.find({ Username: req.query.username });
    const { Password, ...data } = user[0]._doc;
    const products = await Product.find({ User: data._id });
    data.Products = products;

    if (user) Response(res, 200, true, "Përdoruesi u gjet me sukses dhe të dhënat e tij u ngarkuan.", data);
    else Response(res, 404, false, "Përdoruesi nuk u gjet në bazën e të dhënave.", null);
  } catch (error) {
    Response(res, 500, false, "Ndodhi një gabim gjatë përpjekjes për të gjetur përdoruesin.", null);
  }
}
