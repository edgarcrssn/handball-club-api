import * as dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.API_KEY;

export const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey !== API_KEY) {
    return res.status(403).send({ message: 'QuoicouForbidden' });
  } else {
    next();
  }
};
