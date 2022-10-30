import { Page } from '../../models';

export default async function connection(req, res) {
  try {
    const pages = await Page.find({});

    if (pages) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing pages where fetched statusfully.',
          data: pages,
          code: 200,
        }
      );
    } else {
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