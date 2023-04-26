import Database from '../../../Database.js';

export const getArticleByIdWithAuthor = (id) => {
  return new Promise((resolve, reject) => {
    Database.db.get(
      'SELECT a.id, a.title, a.content, a.createdAt, u.firstName, u.lastName, u.email FROM articles a INNER JOIN users u ON u.id = a.userId WHERE a.id = ?',
      [id],
      (error, article) => {
        if (error) reject(error);
        if (!article) reject({ code: 404 });
        else
          resolve({
            id: article.id,
            title: article.title,
            content: article.content,
            createdAt: article.createdAt,
            author: {
              firstName: article.firstName,
              lastName: article.lastName,
              email: article.email,
            },
          });
      }
    );
  });
};
