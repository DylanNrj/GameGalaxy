import { Router } from 'express';
import { getReviews } from '../controllers/reviewsController';
import { createReview } from '../controllers/reviewsController';
import { updateReview } from '../controllers/reviewsController';

const router = Router();

router.get('/', getReviews);
router.post('/', createReview);
router.put('/:id', updateReview);


export default router;
