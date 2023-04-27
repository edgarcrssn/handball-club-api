import { changeRole } from '../services/changeRole.js';

export default async (req, res) => {
  if (!req.params.userId) return res.sendStatus(400);
  try {
    await changeRole(req.params.userId, req.body.role);
    res.sendStatus(200);
  } catch (error) {
    if (error.code === 404) return res.sendStatus(404);
    res.status(500).send(error);
  }
};
