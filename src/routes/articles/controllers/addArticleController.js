import { addArticle } from '../services/addArticle.js';

export default async (req, res) => {
  const { title, content } = req.body;
  try {
    await addArticle(title, content, req.user.id);
    res.sendStatus(201);
  } catch (error) {
    if (error.errno === 19)
      return res.status(309).send({ message: 'this title is already used' });
    res.status(500).send(error);
  }
};
