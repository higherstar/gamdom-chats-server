import { Router } from 'express';

import userRouter from '../routes/userRouter';
import messageRouter from '../routes/messageRouter';

const router = Router();

router.use('/users', userRouter);
router.use('/chat', messageRouter);

export default router;
