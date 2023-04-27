import { getAllArticlesWithAuthor } from '../services/getAllArticlesWithAuthor.js';

export default async (req, res) => {
  try {
    const articles = await getAllArticlesWithAuthor();
    res.send({ articles });
  } catch (error) {
    res.status(500).send(error);
  }
};
