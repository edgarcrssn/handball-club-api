import { checkLogin } from '../../services/auth/login.js';

export default async (req, res) => {
  const { email, password } = req.body;
  const formatLogin = email && password;

  if (formatLogin) {
    try {
      const token = await checkLogin(email, password);
      res.send(token);
    } catch (err) {
      if (err.code === 404) {
        res.status(err.code).send({ message: 'Not found' });
      } else if (err.code === 401) {
        res.status(err.code).send({ message: 'Unauthorized' });
      } else res.status(500).send(err);
    }
  } else {
    res.status(400).send('Bad request');
  }
};
