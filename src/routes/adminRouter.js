import express from 'express';
import joinRequestsController from '../controllers/admin/joinRequestsController.js';
import changeRoleController from '../controllers/admin/changeRoleController.js';
import { changeRoleValidator } from './validators/adminValidator.js';

const adminRouter = express.Router();

adminRouter.get('/join-requests', joinRequestsController);
adminRouter.patch(
  '/change-role/:email',
  changeRoleValidator,
  changeRoleController
);

export default adminRouter;
