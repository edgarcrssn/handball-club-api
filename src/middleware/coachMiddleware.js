import * as dotenv from 'dotenv';
import { authMiddleware } from './authMiddleware.js';
dotenv.config();

export const coachMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (!['coach', 'admin'].includes(req.user.role))
      return res.status(403).send({ message: 'QuoicouForbidden' });

    next();
  });
};
