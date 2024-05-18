import mongoose, { Document, Schema } from 'mongoose';

interface IGame extends Document {
  name: string;
  description: string;
  release_date: Date;
  platform: string;
  gender: string;  
  image_url: string;
  rating: number;
  num_reviews: number;
}

const GameSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  release_date: { type: Date, required: true },
  platform: { type: String, required: true },
  gender: { type: String, required: true },  
  image_url: { type: String, required: true },
  rating: { type: Number, required: true },
  num_reviews: { type: Number, required: true }
}, { collection: 'games' }); 

const Game = mongoose.model<IGame>('Game', GameSchema);

export default Game;
