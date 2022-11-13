
import { Contact } from '../../models';

export default async function connection(req, res) {
  try {
    const message = await Contact.findById(req.query.id);

    if (message) { 
      res.status(200).send(
        {
          status: true,
          message: 'This message was fetched successfully.',
          data: message,
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: false,
          message: 'This message was not fetched.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while fetching this message.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}