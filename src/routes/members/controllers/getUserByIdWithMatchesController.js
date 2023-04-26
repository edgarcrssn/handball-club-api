import { getUserByIdWithMatches } from '../services/getUserByIdWithMatches.js';

export default async (req, res) => {
  const userId = req.params.id;
  if (!userId) return res.send(400).send({ message: 'QuoicouBad Request' });

  try {
    const user = await getUserByIdWithMatches(userId);
    if (!user[0]) return res.status(404).send({ message: 'QuoicouNot Found' });
    res.status(200).send({ user: user[0] });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
