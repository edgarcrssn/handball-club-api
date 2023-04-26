import Database from '../../../Database.js';

export const getArticlesWithAuthor = () => {
  return new Promise((resolve, reject) => {
    Database.db.all(
      'SELECT a.id, a.title, a.content, a.createdAt, u.firstName, u.lastName, u.email FROM articles a INNER JOIN users u ON u.id = a.userId',
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const articles = rows.map((row) => ({
            id: row.id,
            title: row.title,
            content: row.content,
            createdAt: row.createdAt,
            author: {
              firstName: row.firstName,
              lastName: row.lastName,
              email: row.email,
            },
          }));
          resolve(articles);
        }
      }
    );
  });
};
