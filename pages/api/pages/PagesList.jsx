import { PagesList } from '../../../controllers/back';
import { Auther, Waller } from '../../../utils';
import MongoConnect from '../../../utils/MongoConnect';

export default async function handler(req, res) {
  await MongoConnect();
  // Waller(req, res, Auther(req, res, PagesList(req, res)));
  PagesList(req, res)
}
