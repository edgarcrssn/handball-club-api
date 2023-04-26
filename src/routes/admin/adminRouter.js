import express from 'express';

import getJoinRequestsController from './controllers/getJoinRequestsController.js';
import changeRoleController from './controllers/changeRoleController.js';
import { classValidatorMiddleware } from '../../middleware/classValidatorMiddleware.js';

import { changeRoleValidator } from './adminValidators.js';

const adminRouter = express.Router();

adminRouter.get('/join-requests', getJoinRequestsController);
adminRouter.patch(
  '/change-role/:userId',
  changeRoleValidator,
  classValidatorMiddleware,
  changeRoleController
);

export default adminRouter;
