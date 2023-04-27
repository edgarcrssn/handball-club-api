import { verifyCredentials } from '../services/verifyCredentials.js';

export default async (req, res) => {
  try {
    const token = await verifyCredentials(req.body);
    res.send({ token });
  } catch (error) {
    if ([401, 404].includes(error.code)) return res.sendStatus(401);
    res.status(500).send(error);
  }
};
