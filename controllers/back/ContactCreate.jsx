import { Contact } from '../../models';

export default async function connection(req, res) {
  try {
    const newMessage = new Contact(req.body);
    const message = await newMessage.save();

    if (message) {
      res.status(200).send(
        {
          status: true,
          message: 'Your message has been sent successfully!.',
          data: message,
          code: 200,
        }
      );

    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Your message could not be sent.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while sending message.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
