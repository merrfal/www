import { User } from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function connection(req, res) {
  const JWTACCESSKEY = process.env.JWT_SECRET;

  try {
    const salt = await bcrypt.genSalt(10);
    const body = req.body;
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
          message: 'User registered successfully.',
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Something went wrong while registering user.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while registering user.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
