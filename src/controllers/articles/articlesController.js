import { getArticles } from '../../services/articles/getArticles.js';

export default async (req, res) => {
  try {
    const articles = await getArticles();
    res.send(articles);
  } catch (err) {
    res.status(500).send(err);
  }
};
