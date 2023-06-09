import { registerForAMatch } from '../services/registerForAMatch.js';

export default async (req, res) => {
  if (!req.params.matchId) return res.sendStatus(400);
  try {
    await registerForAMatch(req.params.matchId, req.user.id);
    res.sendStatus(201);
  } catch (error) {
    if (error.errno === 19)
      return res
        .status(309)
        .send({ message: 'you already registered for this match' });
    res.status(error.code || 500).send(error.message || error);
  }
};
