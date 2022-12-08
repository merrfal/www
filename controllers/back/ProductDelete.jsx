import { Product, User } from '../../models';
import { Response } from '../../utils';

export default async function ProductDelete(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.query.id);

    if (product) {
      const users = await User.find({})
      
      users.forEach(async (user) => {
        if (user.Favorites.includes(product._id)) {
          user.Favorites.splice(user.Wishlist.indexOf(product._id), 1)
          await user.save()
        }
      });

      Response(res, 200, true, 'Produkti u fshi me sukses.', product) 
    }
  } catch (error) {
    Response(res, 500, false, 'Gabim i brendshëm i serverit gjatë fshirjes së produktit nga platforma.', null) 
  }
}
