import { Product, User } from '../../models';

export default async function connection(req, res) {
  try {
    const userId = req.query.userId;
    const productId = req.query.productId;

    const user = await User.findById(userId)

    let savedList = user.Favorites;

    if (savedList.includes(productId)) {
      res.status(401).send(
        {
          status: true,
          message: 'Përdoruesi tashmë e ka këtë produkt në listën e të preferuarave.' ,
          data: null,
          code: 200,
        }
      );
    }
    
    else  savedList.push(productId);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { Favorites: savedList },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).send(
        {
          status: true,
          message: 'Produkti u ruajt në listën e preferuar të përdoruesit.',
          data: updatedUser,
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: true,
          message: 'Produkti nuk u ruajt në listën e preferuar të përdoruesit.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (err) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit ndërsa preferoni këtë produkt specifik, kontaktoni ekipin nëse ky problem shfaqet përsëri.',
        sysError: err,
        data: null,
        code: 500,
      }
    );
  }
}