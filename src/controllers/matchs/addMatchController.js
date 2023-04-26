import { addMatch, getMatchByDate } from '../../services/matchs/addMatch.js';

export default async (req, res) => {
  const { opponent, opponentScore, teamScore, date } = req.body;

  try {
    const existingMatch = await getMatchByDate(date);
    if (existingMatch) {
      return res
        .status(400)
        .send({ message: 'A match already exists on this date' });
    }

    const newMatch = await addMatch(opponent, opponentScore, teamScore, date);
    res.status(200).send(newMatch);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
