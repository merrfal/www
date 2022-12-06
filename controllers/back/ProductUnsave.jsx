import { User } from '../../models';
import { Response } from '../../utils';

export default async function ProductUnsave(req, res) {
  try {
    const userId = req.query.userId;
    const productId = req.query.productId;

    const user = await User.findById(userId);
    let userSaves = user.Favorites;
    let userSavesUpdated = [];

    if (!userSaves.includes(productId)) Response(res, 404, true, "Përdoruesi nuk e ka favorizuar këtë produkt në mënyrë që ta anulojë atë.", null);

    else {
      userSavesUpdated = userSaves.filter((fav) => fav !== productId);
      const updatedUser = await User.findByIdAndUpdate(userId, { Favorites: userSavesUpdated }, { new: true });
  
      if (updatedUser) Response(res, 200, false, "Produkti u fshi nga lista e preferuar e përdoruesit.", updatedUser);
      else Response(res, 404, false, "Produkti nuk u fshi nga lista e preferuar e përdoruesit.", null);
    }
  } catch (err) {
    Response(res, 500, false, "Gabim i brendshëm i serverit përderisa tentuam ta fshim produktin specifik nga lista e preferuar e përdoruesit.", null);
  }
}