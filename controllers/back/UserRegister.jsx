import { User } from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function connection(req, res) {
  const JWTACCESSKEY = process.env.JWT_SECRET;

  try {
    const salt = await bcrypt.genSalt(10);
    const body = req.body;
    body.Password = Math.random().toString(36).substring(2, 15);
    
    const hashedPassword = await bcrypt.hash(body.Password, salt);

    body.Password = hashedPassword;
    body.FullName = `${req.body.Name || ''} ${req.body.Surname || ''}`;
    
    let Username = body.Username;

    if(body.Username === undefined || body.Username === null || body.Username === '')  Username = `${req.body.Name || ''}${req.body.Surname || ''}${Math.random().toString(36).substring(2, 6)}`;

    body.Username = Username.toLocaleLowerCase();

    const savedUser = new User({ ...body });
    const user = await savedUser.save();

    if (user) {
      const Token = jwt.sign({}, JWTACCESSKEY, { expiresIn: '72h' });
      
      res.status(200).send(
        {
          status: true,
          data: {...user._doc, Token},
          message: 'Përdoruesi u regjistrua me sukses.',
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Ndodhi një gabim gjatë regjistrimit të përdoruesit.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    console.log('res', error)
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë regjistrimit të përdoruesit.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
