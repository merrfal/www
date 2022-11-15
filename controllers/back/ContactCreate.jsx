import { Contact } from '../../models';

export default async function ContactCreate(req, res) {
  try {
    const _new = new Contact(req.body);
    const contact = await _new.save();

    if (contact) {
      res.status(200).send(
        {
          status: true,
          message: 'Mesazhi u dërgua me sukses.',
          data: contact,
          code: 200,
        }
      );

    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Mesazhi nuk u dërgua me sukses për disa arsye të panjohura.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Gabim i brendshëm i serverit gjatë përpjekjes për të dërguar mesazhin.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
