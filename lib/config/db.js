import mongoose from 'mongoose';

export const ConnectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('DB connected');
};
