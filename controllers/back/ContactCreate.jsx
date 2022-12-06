import { Contact } from '../../models';
import { Response } from '../../utils';

export default async function ContactCreate(req, res) {
  try {
    const _new = new Contact(req.body);
    const contact = await _new.save();

    if (contact) Response(res, 200, true, 'Mesazhi u dërgua me sukses.', contact)
    else Response(res, 404, false, 'Mesazhi nuk u dërgua me sukses për disa arsye të panjohura.', null) 
  } catch (error) {
    Response(res, 404, false, 'Gabim i brendshëm i serverit gjatë përpjekjes për të dërguar mesazhin.', null) 
  }
}
