import { validationResult } from 'express-validator';
import { changeRole } from '../services/changeRole.js';

export default async (req, res) => {
  if (!req.params.userId)
    return res.status(400).send({ message: 'QuoicouBadRequest' });
  try {
    await changeRole(req.params.userId, req.body.role);
    res.sendStatus(200);
  } catch (err) {
    res.status(err.code || 500).send(err.message || err);
  }
};
