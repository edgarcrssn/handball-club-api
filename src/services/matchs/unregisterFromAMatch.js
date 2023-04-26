import Database from '../../Database.js';

export const unregisterFromAMatch = (matchId, userId) => {
  return new Promise(async (resolve, reject) => {
    const userQuery = Database.db.get('SELECT id FROM users WHERE id = ?', [
      userId,
    ]);
    if (!userQuery) {
      reject({ code: 404, message: 'no user found with this id' });
    }

    const matchQuery = Database.db.get('SELECT id FROM matchs WHERE id = ?', [
      matchId,
    ]);
    if (!matchQuery) {
      reject({ code: 404, message: 'no match found with this id' });
    }

    Database.db.run(
      'DELETE FROM users_matchs WHERE userId = ? AND matchId = ?',
      [userId, matchId],
      function (err, row) {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};
