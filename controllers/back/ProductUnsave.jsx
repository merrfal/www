import { Product, User } from '../../models';

export default async function ProductUnsave(req, res) {
  try {
    const userId = req.query.userId;
    const productId = req.query.productId;

    const user = await User.findById(userId);
    let userSaves = user.Favorites;
    let userSavesUpdated = [];

    if (!userSaves.includes(productId)) {
      res.status(401).send(
        {
          status: true,
          message: 'Përdoruesi nuk e ka favorizuar këtë produkt në mënyrë që ta anulojë atë.',
          data: null,
          code: 401,
        }
      );
    }


    else {
      userSavesUpdated = userSaves.filter((fav) => fav !== productId);

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { Favorites: userSavesUpdated },
        { new: true }
      );
  
      if (updatedUser) {
        res.status(200).send(
          {
            status: true,
            message: 'Produkti u fshi nga lista e preferuar e përdoruesit.',
            data: updatedUser,
            code: 200,
          }
        );
      } 
      
      else {
        res.status(404).send(
          {
            status: true,
            message: 'Produkti nuk u fshi nga lista e preferuar e përdoruesit.',
            data: null,
            code: 404,
          }
        );
      }
    }
  } catch (err) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit përderisa tentuam ta fshim produktin specifik nga lista e preferuar e përdoruesit.',
        sysError: err,
        data: null,
        code: 500,
      }
    );
  }
}