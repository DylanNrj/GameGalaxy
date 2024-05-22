import { Router } from 'express';
import { getgames } from '../controllers/gamescontroller';
import { createGame } from '../controllers/gamescontroller';

const router = Router();

router.get('/', getgames);
router.post('/', createGame);

export default router;
