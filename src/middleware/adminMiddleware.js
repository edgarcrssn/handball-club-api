import * as dotenv from 'dotenv';
import { authMiddleware } from './authMiddleware.js';
dotenv.config();

export const adminMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (req.user.role !== 'admin')
      return res.status(403).send({ message: 'QuoicouForbidden' });

    next();
  });
};
