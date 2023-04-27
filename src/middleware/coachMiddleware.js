import * as dotenv from 'dotenv';

import { authMiddleware } from './authMiddleware.js';
import { roles } from '../constants/roles.js';

dotenv.config();

export const coachMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (![roles.COACH, roles.ADMIN].includes(req.user.role))
      return res.sendStatus(403);
    next();
  });
};
