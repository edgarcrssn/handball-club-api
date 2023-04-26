import * as dotenv from 'dotenv';
import { authMiddleware } from './authMiddleware.js';
import { roles } from '../constants/roles.js';

dotenv.config();

export const playerMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (![roles.PLAYER, roles.ADMIN].includes(req.user.role))
      return res.status(403).send({ message: 'QuoicouForbidden' });

    next();
  });
};
