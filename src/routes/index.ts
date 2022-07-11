import { Router } from 'express';
import { router as newsRouter } from './news';
import { router as categoriesRouter } from './categories';


const router = Router();
router.use('/v1', newsRouter);
router.use('/v1', categoriesRouter);

export default router;
