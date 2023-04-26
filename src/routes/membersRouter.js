import express from 'express';
import getAllUsersWithMatchesController from '../controllers/members/getAllUsersWithMatchesController.js';
import getUserByIdWithMatchesController from '../controllers/members/getUserByIdWithMatchesController.js';

const membersRouter = express.Router();

membersRouter.get('/', getAllUsersWithMatchesController);
membersRouter.get('/:id', getUserByIdWithMatchesController);

export default membersRouter;
