import { Request, Response } from 'express';
import Game from '../models/games';

export const getgames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los videojuegos', error });
  }
};
