import express from 'express';
import registerForAMatch from '../controllers/matchs/registerForAMatch.js';
import { playerMiddleware } from '../middleware/playerMiddleware.js';

const matchsRouter = express.Router();

matchsRouter.get('/register/:matchId', playerMiddleware, registerForAMatch);

export default matchsRouter;
