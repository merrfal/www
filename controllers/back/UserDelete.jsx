import { User } from '../../models';

export default async function connection(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.query.id);

    if (user) {
      res.status(200).send({
        status: true,
        message: 'User deleted successfully.',
        data: null,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: false,
        message: 'User was not found while attempting to be deleted.',
        data: null,
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Internal server error while attempting to delete user.',
      sysErrors: error,
      data: null,
      code: 500,
    });
  }
}
