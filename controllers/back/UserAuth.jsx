import { User } from '../../models';

export default async function UserAuth(req, res) {
  try {
    const userFull = await User.findById(req.query.id);
    const { Password, ...user } = userFull._doc;

    if (user) {
      res.status(200).send(
        {
          status: true,
          data: user,
          message: 'Perdoruesi u gjet me sukses.',
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: false,
          message: 'Perdoruesi nuk u gjet.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Perdoruesi nuk u gjet.',
        sysErrors: error,
        data: null,
        code: 500,
      }
    );
  }
}
