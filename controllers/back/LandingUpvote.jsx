import { Page } from '../../models';

export default async function connection(req, res) {
  try {
    const userId = req.query.userId;
    const landingId = req.query.landingId;

    const landingPage = await Page.findById(landingId);
    let landingPageUpvotes = landingPage.Upvotes;

    if (landingPageUpvotes.includes(userId)) {
      res.status(401).send(
        {
          status: true,
          message: 'User already upvoted this landing page' ,
          data: null,
          code: 200,
        }
      );
    }
    
    else landingPageUpvotes.push(userId);

    const updatedLandingPage = await Page.findByIdAndUpdate(
      landingId,
      { Upvotes: landingPageUpvotes },
      { new: true }
    );

    if (updatedLandingPage) {
      res.status(200).send(
        {
          status: true,
          message: 'Landing page was updated successfully.',
          data: updatedLandingPage,
          code: 200,
        }
      );
    } 
    else {
      res.status(404).send(
        {
          status: true,
          message: 'Landing page was not updated.',
          data: null,
          code: 404,
        }
      );
    }
  } catch (err) {
    res.status(500).send(
      {
        status: false,
        message: 'Internal server error while updating the landing page.',
        sysError: err,
        data: null,
        code: 500,
      }
    );
  }
}