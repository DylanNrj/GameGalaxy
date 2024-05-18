import { Router } from 'express';
import { getgames } from '../controllers/gamescontroller';

const router = Router();

router.get('/', getgames);

export default router;
