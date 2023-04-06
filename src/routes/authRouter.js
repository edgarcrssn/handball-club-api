import express from 'express';
import loginController from '../controllers/auth/login.js';
import signupController from '../controllers/auth/signup.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const authRouter = express.Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);

export default authRouter;
