import Database from '../../Database.js';

export const registerForAMatch = (matchId, userId) => {
  return new Promise(async (resolve, reject) => {
    Database.db.run(
      'INSERT INTO users_matchs VALUES(?, ?)',
      [matchId, userId],
      async (err, row) => {
        if (err) reject(err);
        resolve(row);
      }
    );
  });
};
