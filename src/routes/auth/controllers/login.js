import { verifyCredentials } from '../services/verifyCredentials.js';

export default async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await verifyCredentials(email, password);
    res.send(token);
  } catch (err) {
    if ([401, 404].includes(err.code)) {
      res.status(401).send({ message: 'QuoicouUnauthorized' });
    } else res.status(500).send(err);
  }
};
