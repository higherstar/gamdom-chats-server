import { Router } from 'express';

import { messageController } from '../controllers/MessageController';

const message = Router();

message.post('/', messageController.create);

export default message;
