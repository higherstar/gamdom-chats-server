import { Request, Response, NextFunction } from 'express';

import { socket } from '../services/SocketService';

export class MessageController {
  constructor() {}

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const msg = req.body.message;
      setTimeout(() => {
        socket.emit('user-msg', {
          level: 1,
          user: 'Tom',
          content: 'Hello'
        });
      }, 1000);
      res.status(201).json({
        level: 1,
        user: 'Jack',
        content: msg
      });
    } catch (err) {
      next(err);
    }
  };
}

export const messageController = new MessageController();
