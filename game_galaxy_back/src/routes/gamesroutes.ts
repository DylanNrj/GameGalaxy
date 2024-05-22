import { Router } from 'express';
import { getgames } from '../controllers/gamescontroller';
import { createGame } from '../controllers/gamescontroller';
import { updateGame } from '../controllers/gamescontroller';
import { deleteGame } from '../controllers/gamescontroller';

const router = Router();

router.get('/', getgames);
router.post('/', createGame);
router.put('/:id', updateGame);
router.delete('/:id', deleteGame);

export default router;
