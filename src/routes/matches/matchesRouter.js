import express from 'express';

import registerForAMatchController from './controllers/registerForAMatchController.js';
import unregisterFromAMatchController from './controllers/unregisterFromAMatchController.js';
import addMatchController from './controllers/addMatchController.js';
import editMatchController from './controllers/editMatchController.js';
import getAllMatchesWithPlayersController from './controllers/getAllMatchesWithPlayersController.js';
import getMatchByIdWithPlayersController from './controllers/getMatchByIdWithPlayersController.js';

import { playerMiddleware } from '../../middleware/playerMiddleware.js';
import { coachMiddleware } from '../../middleware/coachMiddleware.js';
import { classValidatorMiddleware } from '../../middleware/classValidatorMiddleware.js';

import { addMatchValidator } from './matchesValidators.js';

const matchesRouter = express.Router();

matchesRouter.get('/', getAllMatchesWithPlayersController);
matchesRouter.get('/:matchId', getMatchByIdWithPlayersController);

matchesRouter.post(
  '/register/:matchId',
  playerMiddleware,
  registerForAMatchController
);
matchesRouter.post(
  '/unregister/:matchId',
  playerMiddleware,
  unregisterFromAMatchController
);

matchesRouter.post(
  '/',
  coachMiddleware,
  addMatchValidator,
  classValidatorMiddleware,
  addMatchController
);
matchesRouter.patch('/:matchId', coachMiddleware, editMatchController); // TODO

export default matchesRouter;
