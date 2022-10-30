import { Page } from '../../models';

export default async function connection(req, res) {
  try {
    const landingPages = await Page.find({ User: req.query.id });

    if (landingPages) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing pages where fetched statusfully.',
          data: landingPages,
          code: 200,
        }
      );
    } 
    
    else {
      res.status(404).send(
        {
          status: false,
          message: 'No landing pages where found.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while findig the landing pages.',
        sysError: error,
        data: null,
        code: 404,
      }
    );
  }
}
