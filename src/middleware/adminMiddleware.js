import * as dotenv from 'dotenv';

import { authMiddleware } from './authMiddleware.js';
import { roles } from '../constants/roles.js';

dotenv.config();

export const adminMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (req.user.role !== roles.ADMIN) return res.sendStatus(403);
    next();
  });
};
