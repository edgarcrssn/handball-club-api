import { getArticleByIdWithAuthor } from '../services/getArticleByIdWithAuthor.js';

export default async (req, res) => {
  if (!req.params.id) return res.sendStatus(400);
  try {
    const article = await getArticleByIdWithAuthor(req.params.id);
    res.send({ article });
  } catch (error) {
    if (error.code === 404) return res.sendStatus(404);
    res.status(500).send(error);
  }
};
