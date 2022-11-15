import { Newsletter } from '../../models';

export default async function NewsletterCreate(req, res) {
  try {
    const exists = await Newsletter.find({ Email: req.query.email });

    if (exists.length > 0) {
      res.status(200).send({
        status: true,
        message: 'Ju tashmë jeni abonuar në buletinin tonë.',
        data: null,
        code: 200,
      });

      return;
    } 
    
    else {
      const _new = new Newsletter({ Email: req.query.email });
      const newsletter = await _new.save();

      if (newsletter) {
        res.status(200).send({
          status: true,
          message: 'Adresa elektronike juaj u shtua në listën e abonimeve.',
          data: newsletter,
          code: 200,
        });
      } 
      
      else {
        res.status(404).send({
          status: false,
          message:
            'Email-i juaj nuk u shtua në listën e abonimeve, për shkak të një gabimi.',
          data: null,
          code: 404,
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      message: 'Gabim i brendshëm i serverit gjatë përpjekjes për tju shtuar në listën e abonimeve.',
      sysError: error,
      data: null,
      code: 500,
    });
  }
}
