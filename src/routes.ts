import express from 'express';
import SampleRouter from './sample/route/SampleRoute';

const router = express.Router();
router.use('/sample', SampleRouter);

export default router;