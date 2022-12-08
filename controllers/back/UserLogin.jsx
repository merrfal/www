import { User } from '../../models';
import { Response } from '../../utils';

export default async function UserLogin(req, res) {
  try {
    const user = await User.find({ Uid: req.query.uid });
    const { Password, ...data } = user[0]._doc;

    if (user) Response(res, 200, true, "Përdoruesi u gjet me sukses.", data);
    else Response(res, 404, false, "Përdoruesi nuk u gjet në bazën e të dhënave.", null);
  } catch (error) {
    Response(res, 500, false, "Ndodhi një gabim gjatë përpjekjes për të gjetur përdoruesin.", null);
  }
}