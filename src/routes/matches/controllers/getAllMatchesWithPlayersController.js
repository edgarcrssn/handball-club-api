import { getAllMatchesWithPlayers } from '../services/getAllMatchesWithPlayers.js';

export default async (req, res) => {
  try {
    const matches = await getAllMatchesWithPlayers();
    res.send({ matches });
  } catch (error) {
    res.status(500).send(error);
  }
};
