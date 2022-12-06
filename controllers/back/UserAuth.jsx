import { User } from '../../models';
import { Response } from '../../utils';

export default async function UserAuth(req, res) {
  try {
    const userFull = await User.findById(req.query.id);
    const { Password, ...user } = userFull._doc;

    if (user) Response(res, 200, true, "Perdoruesi u gjet me sukses.", user);
    else Response(res, 404, false, "Perdoruesi nuk u gjet.", null);
  } catch (error) {
    Response(res, 500, false, "Perdoruesi nuk u gjet.", null);
  }
}
