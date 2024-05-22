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

export const updateReview = async (req: Request, res: Response) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if(updatedReview){
      res.json(updatedReview);
    }else{
      res.status(404).json({ message: 'Review no encontrada' });
    }
  } catch (error) {
    console.error('Error al actualizar la review:', error);
    res.status(500).json({ message: 'Error al actualizar la review', error });
  }
};
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review no encontrada' });
    }
    res.json({ message: 'Review eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar la review:', error);
    res.status(500).json({ message: 'Error al eliminar la review', error });
  }
};



