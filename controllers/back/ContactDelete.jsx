import { Contact } from '../../models';

export default async function connection(req, res) {
  try {
    const message = await Contact.findByIdAndDelete(req.query.id);

    if (message) {
      res.status(200).send({
        status: true,
        message: 'This message was deleted successfully.',
        data: null,
        code: 200,
      });
    } else {
      res.status(404).send({
        status: false,
        message: 'This message was not deleted.',
        data: null,
        code: 404,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Internal server error while deleting this message.',
      sysError: error,
      data: null,
      code: 500,
    });
  }
}