import bcrypt from "bcrypt";

import { User } from "../../models";
import { Response } from '../../utils';

export default async function UserUpdate(req, res) {
  try {
    const body = req.body;
    const id = req.query.id;

    if (body.Email) {
      const user = await User.findOne({ Email: body.Email });

      if (user) Response(res, 400, false, "Ky email ekziston në databazë.", null);

      else {
        if (body.NewPassword) {
          const salt = await bcrypt.genSalt(10);
          const password = await bcrypt.hash(req.body.NewPassword, salt);
          body.Password = password;
        }

        body.FullName = `${req.body.Name || ""} ${req.body.Surname || ""}`;

        const user = await User.findByIdAndUpdate(id, { $set: body }, { new: true });

        const { Password, ...userWithoutPassword } = user.toObject();

        if (user) Response(res, 200, true, "Përdoruesi u përditësua me sukses.", userWithoutPassword);
        else Response(res, 404, false, "Përdoruesi nuk u gjet në bazën e të dhënave.", null);
      }
    }
  } catch (error) {
    Response(res, 500, false, "Ndodhi një gabim gjatë përpjekjes për të përditësuar përdoruesin.", null);
  }
}
