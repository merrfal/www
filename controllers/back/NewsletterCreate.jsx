import { Newsletter } from '../../models';
import { Response } from '../../utils';

export default async function NewsletterCreate(req, res) {
  try {
    const exists = await Newsletter.find({ Email: req.query.email });


    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i;
    if (exists.length > 0) Response(res, 333, false, 'Ju tashmë jeni abonuar në buletinin tonë.', null)

    if (!regEx.test(req.query.email) && req.query.email !== "") Response(res, 333, false, 'Ju lutem shkruani një email valide.', null)

    else {
      const _new = new Newsletter({ Email: req.query.email });
      const newsletter = await _new.save();

      if (newsletter) Response(res, 200, true, 'Adresa elektronike juaj u shtua në listën e abonimeve.', newsletter)
      else Response(res, 404, false, 'Email-i juaj nuk u shtua në listën e abonimeve, për shkak të një gabimi.', null)
    }
  } catch (error) {
    Response(res, 500, false, 'Gabim i brendshëm i serverit gjatë përpjekjes për tju shtuar në listën e abonimeve.', null)
  }
}
