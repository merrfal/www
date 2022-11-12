import { User } from '../../models';
import bcrypt from 'bcrypt';

// TODO: check if the user uses the same email as another user and also the username.

export default async function connection(req, res) {
  try {
    const body = req.body;
    const id = req.query.id;

    if (body.NewPassword) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.NewPassword, salt);
      body.Password = password;
    }

    body.FullName = `${req.body.Name || ''} ${req.body.Surname || ''}`;

    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: body,
      },
      {
        new: true,
      }
    );

    const { Password, ...userWithoutPassword } = user.toObject();

    if (user) {
      res.status(200).send({
        status: true,
        message: 'Përdoruesi u përditësua me sukses.',
        data: userWithoutPassword,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: false,
        message: 'Përdoruesi nuk u gjet në bazën e të dhënave.',
        data: null,
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Ndodhi një gabim gjatë përpjekjes për të përditësuar përdoruesin.',
      data: null,
      code: 500,
    });
  }
}
