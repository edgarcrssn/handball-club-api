import { editMatch } from '../services/editMatch.js';

export default async (req, res) => {
  if (!req.params.matchId) return res.sendStatus(400);
  try {
    await editMatch(req.params.matchId, req.body);
    res.sendStatus(200);
  } catch (error) {
    if (error.code === 404) return res.sendStatus(404);
    res.status(500).send(error);
  }
};
