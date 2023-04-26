import express from 'express';

import getAllUsersWithMatchesController from './controllers/getAllUsersWithMatchesController.js';
import getUserByIdWithMatchesController from './controllers/getUserByIdWithMatchesController.js';

const membersRouter = express.Router();

membersRouter.get('/', getAllUsersWithMatchesController);
membersRouter.get('/:id', getUserByIdWithMatchesController);

export default membersRouter;
