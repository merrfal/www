import { PageView } from '../../../../controllers/back';
import MongoConnect from '../../../../utils/MongoConnect';

export default async function handler(req, res) {
  await MongoConnect();
  PageView(req, res);
}