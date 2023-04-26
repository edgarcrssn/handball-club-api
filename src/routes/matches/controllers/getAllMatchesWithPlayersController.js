import { getAllMatchesWithPlayers } from '../services/getAllMatchesWithPlayers.js';

export default async (req, res) => {
  try {
    const allMatches = await getAllMatchesWithPlayers();
    res.status(200).send(allMatches);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
