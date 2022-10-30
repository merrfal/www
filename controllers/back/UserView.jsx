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
          message: 'User was found successfully.',
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'User was not found in the database.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'An error occurred while trying to find the user.',
        sysErrors: error,
        data: null,
        code: 500,
      }
    );
  }
}
