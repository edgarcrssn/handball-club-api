import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).send({ message: 'QuoicouUnauthorized' });

  const secret = process.env.SECRET;

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(401).send({ message: 'QuoicouUnauthorized' });
    req.user = user;
    next();
  });
};
