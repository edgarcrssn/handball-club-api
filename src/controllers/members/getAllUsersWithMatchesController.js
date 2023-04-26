import { getAllUsersWithMatches } from '../../services/members/getAllUsersWithMatches.js';

export default async (req, res) => {
  try {
    const allUsers = await getAllUsersWithMatches();
    res.status(200).send(allUsers);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
