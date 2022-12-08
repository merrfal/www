import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { User } from '../../models';
import { Response } from '../../utils';

export default async function UserRegister(req, res) {
  const JWTACCESSKEY = process.env.JWT_SECRET;

  try {
    const salt = await bcrypt.genSalt(10);
    const body = req.body;
    body.Password = Math.random().toString(36).substring(2, 15);
    
    const hashedPassword = await bcrypt.hash(body.Password, salt);

    body.Password = hashedPassword;
    body.FullName = `${req.body.Name || ''} ${req.body.Surname || ''}`;
    
    let Username = `${req.body.Name || ''}${req.body.Surname || ''}`;

    const usernameExists = await User.findOne({ Username: body.Username });

    if(usernameExists || Username.length === 0) Username = `${req.body.Name || ''}${req.body.Surname || ''}${Math.random().toString(36).substring(2, 6)}`;

    body.Username = Username.toLocaleLowerCase();

    const savedUser = new User({ ...body });
    const user = await savedUser.save();

    if (user) {
      const Token = jwt.sign({}, JWTACCESSKEY, { expiresIn: '72h' });
      Response(res, 200, true, "Përdoruesi u regjistrua me sukses.", {...user._doc, Token});
    }
    
    else Response(res, 404, false, "Ndodhi një gabim gjatë regjistrimit të përdoruesit.", null);
  } catch (error) {
    Response(res, 500, false, "Gabim i brendshëm i serverit gjatë regjistrimit të përdoruesit.", null);
  }
}
