import { addMatch, getMatchByDate } from '../services/addMatch.js';

export default async (req, res) => {
  const { opponent, opponentScore, teamScore, date } = req.body;

  try {
    const existingMatch = await getMatchByDate(date);
    if (existingMatch)
      return res
        .status(400)
        .send({ message: 'A match already exists on this date' });

    await addMatch(opponent, opponentScore, teamScore, date);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
};
