import { Router } from 'express';

import { userController } from '../controllers/UserController';

const userRouter = Router();

userRouter.get('/', userController.list);
userRouter.post('/', userController.create);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.remove);

export default userRouter;
