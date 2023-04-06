import { getJoinRequests } from '../../services/admin/getJoinRequests.js';

export default async (req, res) => {
  const members = await getJoinRequests();
  res.send(members);
};
