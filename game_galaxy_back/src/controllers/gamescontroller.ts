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

export const createGame = async (req: Request, res: Response) => {
  try {
    const newGame = new Game(req.body)
    await newGame.save()
    res.status(201).json(newGame)
  } catch (error: any) {
    console.error('Error al crear el juego:', error)
    res.status(500).json({ message: 'Error al crear el juego', error })
  }
};

export const updateGame = async (req: Request, res: Response) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (updatedGame) {
      res.json(updatedGame)
    } else {
      res.status(404).json({ message: 'No se encontró el juego con el ID proporcionado' })
    }
  } catch (error: any) {
    console.error('Error al actualizar el juego:', error)
    res.status(500).json({ message: 'Error al actualizar el juego', error })
  }
};