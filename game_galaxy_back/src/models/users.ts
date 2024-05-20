import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  user: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

const UserSchema = new Schema({
  user: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { collection: 'users' });

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
