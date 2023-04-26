import { validationResult } from 'express-validator';
import { changeRole } from '../../services/admin/changeRole.js';

export default async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  if (!req.params.email || !req.body.role) {
    return res.status(400).send({ message: 'QuoicouBadRequest' });
  }

  try {
    await changeRole(req.params.email, req.body.role);
    res.status(200).send({ message: 'Role modifié avec succès' });
  } catch (err) {
    res.status(err.code || 500).send(err.message || err);
  }
};
