import express from 'express';
import loginController from '../controllers/auth/login.js';
import signupController from '../controllers/auth/signup.js';
import { verifyToken } from '../services/auth/verifyToken.js';

const authRouter = express.Router();

authRouter.post('/signup', signupController);
authRouter.post('/login', loginController);
authRouter.get('/test', verifyToken, (req, res) => {
  res.send('Coucou');
});

export default authRouter;
