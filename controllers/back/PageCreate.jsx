import { Page } from '../../models';

export default async function connection(req, res) {
  try {
    const _new = new Page(req.body);
    const _page = await _new.save();

    if (_page) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing page was created successfully.',
          data: _page,
          code: 200,
        }
      );

    } else {
      res.status(404).send(
        {
          status: false,
          message: 'Landing page was not created.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (error) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while creating the landing page.',
        sysError: error,
        data: null,
        code: 500,
      }
    );
  }
}
