import { getMatchByIdWithPlayers } from '../../services/matchs/getMatchByIdWithPlayers.js';

export default async (req, res) => {
  const matchId = req.params.matchId;

  if (!matchId) return res.status(400).send({ message: 'QuoicouBad Request' });

  try {
    const match = await getMatchByIdWithPlayers(matchId);
    if (!match) return res.status(404).send({ message: 'QuoicouNot Found' });
    res.status(200).send(match);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
