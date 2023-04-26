import Database from '../../../Database.js';

export const addArticle = (title, content, createdAt, userId) => {
  return new Promise((resolve, reject) => {
    Database.db.run(
      'INSERT INTO articles (title, content, createdAt, userId) VALUES (?, ?, ?, ?)',
      [title, content, createdAt],
      function (err) {
        if (err) {
          reject(err);
        } else {
          const article = {
            id: this.lastID,
            title: title,
            content: content,
            createdAt: createdAt,
            userId: userId,
          };
          resolve(article);
        }
      }
    );
  });
};
