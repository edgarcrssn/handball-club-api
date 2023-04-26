import * as dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.API_KEY;

export const apiKeyMiddleware = (req, res, next) => {
  const api_key = req.header('x-api-key');
  if (api_key !== API_KEY) {
    return res.status(403).send({ message: 'QuoicouForbidden' });
  } else {
    next();
  }
};
