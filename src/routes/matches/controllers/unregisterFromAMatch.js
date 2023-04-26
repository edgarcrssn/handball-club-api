import { unregisterFromAMatch } from '../services/unregisterFromAMatch.js';

export default async (req, res) => {
  if (!req.params.matchId) return res.send(400).send({ message: 'BadRequest' });

  try {
    await unregisterFromAMatch(req.params.matchId, req.user.id);
    res.send();
  } catch (err) {
    if (err.errno === 19)
      return res
        .status(309)
        .send({ message: 'you are not registered for this match' });
    res.status(err.code || 500).send(err.message || err);
  }
};
