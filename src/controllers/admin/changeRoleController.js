import { changeRole } from '../../services/admin/changeRole.js';

export default async (req, res) => {
  const isRoleOk = ['coach', 'contributor', 'player'].includes(req.body.role);

  if (!req.params.email || !isRoleOk)
    return res.status(400).send({ message: 'QuoicouBadRequest' });

  await changeRole(req.params.email, req.body.role);
  res.send();
};
