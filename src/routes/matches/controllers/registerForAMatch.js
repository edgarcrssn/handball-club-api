import { registerForAMatch } from '../services/registerForAMatch.js';

export default async (req, res) => {
  if (!req.params.matchId) return res.send(400).send({ message: 'BadRequest' });

  try {
    await registerForAMatch(req.params.matchId, req.user.id);
    res.send();
  } catch (err) {
    if (err.errno === 19)
      return res
        .status(309)
        .send({ message: 'you already registered for this match' });
    res.status(err.code || 500).send(err.message || err);
  }
};
