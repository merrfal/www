import mongoose from 'mongoose';

const MongoConnect = async () => {
    const URI = process.env.MONGO_URI;
    return mongoose.connect(URI);
}

export default MongoConnect;