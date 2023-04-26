import { getArticlesWithAuthor } from '../services/getArticlesWithAuthor.js';

export default async (req, res) => {
  try {
    const articles = await getArticlesWithAuthor();
    res.send({ articles });
  } catch (err) {
    res.status(500).send(err);
  }
};
