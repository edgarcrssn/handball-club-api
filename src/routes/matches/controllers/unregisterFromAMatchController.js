import { unregisterFromAMatch } from '../services/unregisterFromAMatch.js';

export default async (req, res) => {
  if (!req.params.matchId) return res.sendStatus(400);
  try {
    await unregisterFromAMatch(req.params.matchId, req.user.id);
    res.sendStatus(200);
  } catch (error) {
    if (error.code === 404)
      return res
        .status(404)
        .send({ message: 'you are not registered for this match' });
    res.status(error.code || 500).send(error.message || error);
  }
};
