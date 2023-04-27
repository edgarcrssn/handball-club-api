import { getUserByIdWithMatches } from '../services/getUserByIdWithMatches.js';

export default async (req, res) => {
  if (!req.params.id) return res.sendStatus(400);
  try {
    const users = await getUserByIdWithMatches(req.params.id);
    if (!users[0]) return res.sendStatus(404);
    res.send({ user: users[0] });
  } catch (error) {
    res.status(500).send(error);
  }
};
