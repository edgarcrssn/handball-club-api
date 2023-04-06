import { verifyCredentials } from '../../services/auth/verifyCredentials.js';

export default async (req, res) => {
  const { email, password } = req.body;
  const formatLogin = email && password;

  if (formatLogin) {
    try {
      const token = await verifyCredentials(email, password);
      res.send(token);
    } catch (err) {
      if (err.code === 404) {
        res.status(err.code).send({ message: 'Not Quoicoufound' });
      } else if (err.code === 401) {
        res.status(err.code).send({ message: 'QuoicouUnauthorized' });
      } else res.status(500).send(err);
    }
  } else {
    res.status(400).send('Bad Quoicourequest');
  }
};
