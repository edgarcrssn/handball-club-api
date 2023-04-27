import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET, (error, user) => {
    if (error) return res.sendStatus(401);
    req.user = user;
    next();
  });
};
