import { getArticleByIdWithAuthor } from '../services/getArticleByIdWithAuthor.js';

export default async (req, res) => {
  if (!req.params.id)
    return res.status(400).send({ message: 'QuoicouBadRequest' });

  try {
    const article = await getArticleByIdWithAuthor(req.params.id);
    if (!article) return res.status(404).send({ message: 'QuoicouNotFound' });
    res.send({ article });
  } catch (error) {
    if (error.code === 404) return res.sendStatus(404);
    res.status(500).send(error);
  }
};
