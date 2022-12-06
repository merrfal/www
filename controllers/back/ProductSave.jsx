import { User } from "../../models";
import { Response } from "../../utils";

export default async function ProductSave(req, res) {
  try {
    const userId = req.query.userId;
    const productId = req.query.productId;

    const user = await User.findById(userId);
    let savedList = user.Favorites;

    if (savedList.includes(productId)) Response(res, 401, false, "Përdoruesi tashmë e ka këtë produkt në listën e të preferuarave.", null);

    else savedList.push(productId);

    const updatedUser = await User.findByIdAndUpdate(userId, { Favorites: savedList }, { new: true });

    if (updatedUser) Response(res, 200, true, "Produkti u ruajt në listën e preferuar të përdoruesit.", updatedUser);
    else Response(res, 404, false, "Produkti nuk u ruajt në listën e preferuar të përdoruesit.", null);
  } catch (err) {
    Response(res, 500, false, "Gabim i brendshëm i serverit ndërsa preferoni këtë produkt specifik, kontaktoni ekipin nëse ky problem shfaqet përsëri.", null);
  }
}
