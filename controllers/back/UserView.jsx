import { User } from '../../models';

export default async function connection(req, res) {
  try {
    const user = await User.find({ Username: req.query.username });
    const { Password, ...data } = user[0]._doc;

    if (user) {
      res.status(200).send(
        {
          status: true,
          data: data,
          message: 'Përdoruesi u gjet me sukses dhe të dhënat e tij u ngarkuan.',
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Përdoruesi nuk u gjet në bazën e të dhënave.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Ndodhi një gabim gjatë përpjekjes për të gjetur përdoruesin.',
        sysErrors: error,
        data: null,
        code: 500,
      }
    );
  }
}
