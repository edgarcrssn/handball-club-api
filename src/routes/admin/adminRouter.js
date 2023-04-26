import express from 'express';
import joinRequestsController from './controllers/joinRequestsController.js';
import changeRoleController from './controllers/changeRoleController.js';
import { changeRoleValidator } from './adminValidators.js';

const adminRouter = express.Router();

adminRouter.get('/join-requests', joinRequestsController);
adminRouter.patch(
  '/change-role/:email',
  changeRoleValidator,
  changeRoleController
);

export default adminRouter;
