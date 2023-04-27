import { getAllMatchesWithPlayers } from '../services/getAllMatchesWithPlayers.js';

export default async (req, res) => {
  try {
    const matches = await getAllMatchesWithPlayers();
    res.status(200).send({ matches });
  } catch (err) {
    res.status(500).send(err);
  }
};
