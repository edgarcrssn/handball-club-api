import express from 'express';

import signupController from './controllers/signup.js';
import loginController from './controllers/login.js';

import { classValidatorMiddleware } from '../../middleware/classValidatorMiddleware.js';

import { signupValidator, loginValidator } from './authValidators.js';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  signupValidator,
  classValidatorMiddleware,
  signupController
);
authRouter.post(
  '/login',
  loginValidator,
  classValidatorMiddleware,
  loginController
);

export default authRouter;
