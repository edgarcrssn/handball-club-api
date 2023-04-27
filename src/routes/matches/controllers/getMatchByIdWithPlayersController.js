import { getMatchByIdWithPlayers } from '../services/getMatchByIdWithPlayers.js';

export default async (req, res) => {
  if (!req.params.matchId) return res.sendStatus(400);
  try {
    const match = await getMatchByIdWithPlayers(req.params.matchId);
    res.send({ match });
  } catch (error) {
    if (error.code === 404) return res.sendStatus(404);
    res.status(500).send(error);
  }
};
