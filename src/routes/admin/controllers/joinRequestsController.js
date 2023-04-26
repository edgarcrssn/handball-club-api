import { getJoinRequests } from '../services/getJoinRequests.js';

export default async (req, res) => {
  try {
    const members = await getJoinRequests();
    res.send(members);
  } catch (err) {
    res.status(500).send(err);
  }
};
