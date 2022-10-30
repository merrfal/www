import mongoose from 'mongoose';
const URI = process.env.MONGO_URI;
const MongoConnect = async () => mongoose.connect(URI);
export default MongoConnect;