import mongoose, { Document, Schema } from 'mongoose';

interface IReview extends Document {
  game: string;
  user: string;
  rating: number;
  comment: string;
  created_at: Date;
  updated_at: Date;
}

const ReviewSchema = new Schema({
  game: { type: String, required: true },
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, { collection: 'reviews' });

const Review = mongoose.model<IReview>('Review', ReviewSchema);

export default Review;
