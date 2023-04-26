import { addArticle } from '../../services/articles/addArticle.js';

export default async (req, res) => {
  const { title, content, createdAt } = req.body;

  // TODO express-validator
  if (!title || !content || !createdAt) {
    return res.status(400).send({ message: 'Missing a Quoicouparameters' });
  }

  try {
    const newArticle = await addArticle(title, content, createdAt, req.user.id);
    res.status(200).send(newArticle);
  } catch (err) {
    res.status(500).send(err);
  }
};