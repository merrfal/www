import { Product, User } from "../../models";
import { Response } from "../../utils";

export default async function ProductView(req, res) {
  try {
    const productPre = await Product.find({ Slug: req.query.slug });

    let Views = parseInt(productPre[0].Views);

    Views = Views + 1;

    let product = await Product.findOneAndUpdate(
      { Slug: req.query.slug },
      { Views: Views },
      { new: true }
    );

    const others = await Product.find({ Category: product.Category }).limit(4);
    const user = await User.findById(product.User);

    const newUser =
      product.UserShow === false
        ? {
            Id: null,
            Name: "Listim",
            Surname: "Anonim",
            Avatar: false,
          }
        : {
            Id: user._id,
            FullName: user.FullName,
            Username: user.Username,
            Avatar: user.Avatar,
          };

    const data = { ...product._doc, Recommendations: others, User: newUser };

    if (product) Response(res, 404, false, "Produkti u mor me sukses.", data);
    else
      Response(
        res,
        404,
        false,
        "Produkti nuk u mor për shkak të një gabimi ose nuk ekziston.",
        null
      );
  } catch (error) {
    Response(
      res,
      500,
      false,
      "Produkti nuk u mor për shkak të një gabimi të brendshëm të serverit.",
      null
    );
  }
}
