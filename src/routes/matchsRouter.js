import express from 'express';
import registerForAMatch from '../controllers/matchs/registerForAMatch.js';
import unregisterFromAMatch from '../controllers/matchs/unregisterFromAMatch.js';
import { playerMiddleware } from '../middleware/playerMiddleware.js';
import { coachMiddleware } from '../middleware/coachMiddleware.js';
import addMatchController from '../controllers/matchs/addMatchController.js';
import { addMatchValidator } from './validators/matchValidator.js';
import { handleClassValidatorErrors } from '../middleware/handleClassValidatorErrors.js';
import editMatchController from '../controllers/matchs/editMatchController.js';
import getAllMatchesWithPlayersController from '../controllers/matchs/getAllMatchesWithPlayersController.js';
import getMatchByIdWithPlayersController from '../controllers/matchs/getMatchByIdWithPlayersController.js';

const matchsRouter = express.Router();

matchsRouter.get('/', getAllMatchesWithPlayersController);
matchsRouter.get('/:matchId', getMatchByIdWithPlayersController);
matchsRouter.post('/register/:matchId', playerMiddleware, registerForAMatch);
matchsRouter.post(
  '/unregister/:matchId',
  playerMiddleware,
  unregisterFromAMatch
);
matchsRouter.post(
  '/add',
  coachMiddleware,
  addMatchValidator,
  handleClassValidatorErrors,
  addMatchController
);
matchsRouter.patch('/:matchId', coachMiddleware, editMatchController); // TODO

export default matchsRouter;
