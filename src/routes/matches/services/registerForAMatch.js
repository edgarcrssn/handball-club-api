import Database from '../../../Database.js';

export const registerForAMatch = (matchId, userId) => {
  return new Promise(async (resolve, reject) => {
    const userQuery = Database.db.get('SELECT id FROM users WHERE id = ?', [
      userId,
    ]);
    if (!userQuery) {
      reject({ code: 404, message: 'no user found with this id' });
    }

    const matchQuery = Database.db.get('SELECT id FROM matches WHERE id = ?', [
      matchId,
    ]);
    if (!matchQuery) {
      reject({ code: 404, message: 'no match found with this id' });
    }

    Database.db.run(
      'INSERT INTO users_matches VALUES(?, ?)',
      [userId, matchId],
      function (err, row) {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};
