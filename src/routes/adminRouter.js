import express from 'express';
import joinRequestsController from '../controllers/admin/joinRequestsController.js';
import changeRoleController from '../controllers/admin/changeRoleController.js';

const adminRouter = express.Router();

adminRouter.get('/join-requests', joinRequestsController);
adminRouter.patch('/change-role/:email', changeRoleController);

export default adminRouter;
