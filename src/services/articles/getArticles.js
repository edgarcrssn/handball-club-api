import Database from '../../Database.js';

export const getArticles = () => {
  return new Promise((resolve, reject) => {
    Database.db.all(
      'SELECT id, title, content, createdAt FROM articles',
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const articles = rows.map((row) => ({
            id: row.id,
            title: row.title,
            content: row.content,
            createdAt: row.createdAt,
          }));
          resolve(articles);
        }
      }
    );
  });
};
