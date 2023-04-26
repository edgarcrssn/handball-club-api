import express from 'express';
import loginController from '../controllers/auth/login.js';
import signupController from '../controllers/auth/signup.js';
import { signupValidator, loginValidator } from './validators/authValidator.js';
import { handleClassValidatorErrors } from '../middleware/handleClassValidatorErrors.js';

const authRouter = express.Router();

authRouter.post(
  '/signup',
  signupValidator,
  handleClassValidatorErrors,
  signupController
);
authRouter.post(
  '/login',
  loginValidator,
  handleClassValidatorErrors,
  loginController
);

export default authRouter;
