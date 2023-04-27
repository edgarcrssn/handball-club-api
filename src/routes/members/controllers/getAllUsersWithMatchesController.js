import { getAllUsersWithMatches } from '../services/getAllUsersWithMatches.js';

export default async (req, res) => {
  try {
    const users = await getAllUsersWithMatches();
    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send(error);
  }
};
