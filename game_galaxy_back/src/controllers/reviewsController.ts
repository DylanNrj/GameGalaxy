import { Request, Response } from 'express';
import Review from '../models/reviews';

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error al obtener las reviews:', error);
    res.status(500).json({ message: 'Error al obtener las reviews', error });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error al crear la review:', error);
    res.status(500).json({ message: 'Error al crear la review', error });
  }
};
