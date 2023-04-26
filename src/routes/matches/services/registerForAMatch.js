import Database from '../../../Database.js';

export const registerForAMatch = (matchId, userId) => {
  return new Promise(async (resolve, reject) => {
    Database.db.get(
      'SELECT id FROM users WHERE id = ?',
      [userId],
      function (error, user) {
        if (error) reject(error);
        if (!user) reject({ code: 404, message: 'no user found with this id' });

        Database.db.get(
          'SELECT id FROM matches WHERE id = ?',
          [matchId],
          function (error, match) {
            if (error) reject(error);
            if (!match)
              reject({ code: 404, message: 'no match found with this id' });

            Database.db.run(
              'INSERT INTO users_matches VALUES(?, ?)',
              [userId, matchId],
              function (error) {
                if (error) reject(error);
                resolve();
              }
            );
          }
        );
      }
    );
  });
};
