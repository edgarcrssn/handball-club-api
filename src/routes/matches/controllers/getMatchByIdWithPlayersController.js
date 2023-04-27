import { getMatchByIdWithPlayers } from '../services/getMatchByIdWithPlayers.js';

export default async (req, res) => {
  const matchId = req.params.matchId;
  if (!matchId) return res.status(400).send({ message: 'QuoicouBad Request' });
  try {
    const match = await getMatchByIdWithPlayers(matchId);
    res.status(200).send({ match });
  } catch (error) {
    if (error.code === 404) return res.sendStatus(404);
    res.status(500).send(error);
  }
};
