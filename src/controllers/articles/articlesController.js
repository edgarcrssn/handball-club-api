import { getArticles } from '../../services/articles/getArticles.js';

export default async (req, res) => {
  const articles = await getArticles();
  res.send(articles);
};
