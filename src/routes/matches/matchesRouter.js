import express from 'express';
import registerForAMatch from './controllers/registerForAMatch.js';
import unregisterFromAMatch from './controllers/unregisterFromAMatch.js';
import { playerMiddleware } from '../../middleware/playerMiddleware.js';
import { coachMiddleware } from '../../middleware/coachMiddleware.js';
import addMatchController from './controllers/addMatchController.js';
import { addMatchValidator } from './matchesValidators.js';
import { classValidatorMiddleware } from '../../middleware/classValidatorMiddleware.js';
import editMatchController from './controllers/editMatchController.js';
import getAllMatchesWithPlayersController from './controllers/getAllMatchesWithPlayersController.js';
import getMatchByIdWithPlayersController from './controllers/getMatchByIdWithPlayersController.js';

const matchesRouter = express.Router();

matchesRouter.get('/', getAllMatchesWithPlayersController);
matchesRouter.get('/:matchId', getMatchByIdWithPlayersController);
matchesRouter.post('/register/:matchId', playerMiddleware, registerForAMatch);
matchesRouter.post(
  '/unregister/:matchId',
  playerMiddleware,
  unregisterFromAMatch
);
matchesRouter.post(
  '/add',
  coachMiddleware,
  addMatchValidator,
  classValidatorMiddleware,
  addMatchController
);
matchesRouter.patch('/:matchId', coachMiddleware, editMatchController); // TODO

export default matchesRouter;
