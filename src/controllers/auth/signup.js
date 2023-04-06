import { createUser } from '../../services/auth/createUser.js';

export default async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const isBodyCorrectFormat = firstName && lastName && email && password;

  if (isBodyCorrectFormat) {
    try {
      const user = await createUser(req.body);
      res.send({ user });
    } catch (e) {
      if (e.errno === 19)
        res.status(409).send({ message: 'Email is already taken' });
      else res.status(500).send(error);
    }
  } else {
    res.status(400).send('Bad Quoicourequest');
  }
};
