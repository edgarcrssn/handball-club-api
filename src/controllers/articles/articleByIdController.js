import { getArticleById } from '../../services/articles/getArticleById.js';

export default async (req, res) => {
  if (!req.params.id) res.status(400).send({ message: 'QuoicouBadRequest' });
  const articleById = await getArticleById(req.params.id);
  if (!articleById) res.status(404).send({ message: 'QuoicouNotFound' });
  res.send(articleById);
};
