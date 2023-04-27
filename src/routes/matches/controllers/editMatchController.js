import { editMatch } from '../services/editMatch.js';

export default async (req, res) => {
  const matchId = req.params.matchId;
  if (!matchId) return res.sendStatus(400);
  try {
    await editMatch(matchId, req.body);
    res.sendStatus(200);
  } catch (error) {
    if (error.code === 404) return res.sendStatus(404);
    res.status(500).send(error);
  }
};
