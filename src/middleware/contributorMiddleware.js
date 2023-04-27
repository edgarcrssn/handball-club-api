import * as dotenv from 'dotenv';

import { authMiddleware } from './authMiddleware.js';
import { roles } from '../constants/roles.js';

dotenv.config();

export const contributorMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (![roles.CONTRIBUTOR, roles.ADMIN].includes(req.user.role))
      return res.sendStatus(403);
    next();
  });
};
