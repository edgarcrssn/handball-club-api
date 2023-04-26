import { createUser } from '../services/createUser.js';

export default async (req, res) => {
  try {
    await createUser(req.body);
    res.sendStatus(201);
  } catch (error) {
    if (error.errno === 19)
      res.status(409).send({ message: 'email is already taken' });
    else res.status(500).send(error);
  }
};
