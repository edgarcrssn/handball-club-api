import Database from '../../../Database.js';

export const addMatch = (opponent, opponentScore, teamScore, date) => {
  return new Promise((resolve, reject) => {
    const matchData = [opponent, opponentScore, teamScore, date];

    for (let i = 0; i < matchData.length; i++) {
      if (matchData[i] === undefined || matchData[i] === null) {
        matchData[i] = 'NULL';
      }
    }

    Database.db.run(
      'INSERT INTO matches (opponent, opponentScore, teamScore, date) VALUES (?, ?, ?, DATE(?))',
      matchData,
      function (error) {
        if (error) reject(error);
        else resolve();
      }
    );
  });
};

export const getMatchByDate = (date) => {
  return new Promise(async (resolve, reject) => {
    const sql = `
      SELECT id
      FROM matches m
      WHERE DATE(m.date) = DATE(?)
    `;
    Database.db.all(sql, [date], function (err, result) {
      if (err) {
        reject(err);
      } else {
        if (result.length > 0) resolve(true);
        resolve(false);
      }
    });
  });
};
