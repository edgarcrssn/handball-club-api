import { addMatch, getMatchByDate } from '../services/addMatch.js';

export default async (req, res) => {
  try {
    const existingMatch = await getMatchByDate(req.body.date);
    if (existingMatch)
      return res
        .status(400)
        .send({ message: 'a match already exists on this date' });

    await addMatch(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error);
  }
};
