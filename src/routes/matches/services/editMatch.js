import Database from '../../../Database.js';

export const editMatch = (matchId, { opponentScore, teamScore }) => {
  return new Promise((resolve, reject) => {
    Database.db.run(
      'UPDATE matches SET opponentScore = ?, teamScore = ? WHERE id = ?',
      [opponentScore, teamScore, matchId],
      function (error) {
        if (error) reject(error);
        else if (this.changes === 0) {
          reject({ code: 404 });
        } else resolve();
      }
    );
  });
};
