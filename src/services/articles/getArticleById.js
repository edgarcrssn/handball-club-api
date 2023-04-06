import Database from '../../Database.js';

export const getArticleById = (id) => {
  return new Promise((resolve, reject) => {
    Database.db.get(
      'SELECT id, title, content, createdAt FROM articles WHERE id = ?',
      [id],
      (err, articles) => {
        if (err) {
          reject(err);
        } else {
          resolve(articles);
        }
      }
    );
  });
};
