import Database from '../../../Database.js';

export const addArticle = (title, content, userId) => {
  return new Promise((resolve, reject) => {
    Database.db.run(
      'INSERT INTO articles (title, content, userId) VALUES (?, ?, ?)',
      [title, content, userId],
      function (error) {
        if (error) reject(error);
        else resolve();
      }
    );
  });
};
