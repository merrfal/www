import { PageCreate } from '../../../controllers/back';
import MongoConnect from '../../../utils/MongoConnect';

export default async function handler(req, res) {
  await MongoConnect();
  PageCreate(req, res);
}
