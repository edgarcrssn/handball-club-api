import { getArticleById } from '../../services/articles/getArticleById.js';

export default async (req, res) => {
  if (!req.params.id)
    return res.status(400).send({ message: 'QuoicouBadRequest' });

  try {
    const articleById = await getArticleById(req.params.id);
    if (!articleById)
      return res.status(404).send({ message: 'QuoicouNotFound' });
    res.send(articleById);
  } catch (err) {
    res.status(500).send(err);
  }
};
