import { registerForAMatch } from '../../services/matchs/registerForAMatch.js';

export default async (req, res) => {
  if (!req.params.matchId) return res.send(400).send({ message: 'BadRequest' });

  try {
    await registerForAMatch(req.params.matchId, req.user.id);
    res.send();
  } catch (err) {
    res.status(500).send(err);
  }
};
