import {Contact} from "../../models"
export default async function connection(req, res) {
  try {
    const contacts = await Contact.find({});

    if (contacts) {
      res.status(200).send(
        {
          status: true,
          message: 'Contacts where fetched statusfully.',
          data: contacts,
          code: 200,
        }
      );
    } else {
      res.status(404).send(
        {
          status: false,
          message: 'No contact where found.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while findig the contacts.',
        sysError: error,
        data: null,
        code: 404,
      }
    );
  }
}