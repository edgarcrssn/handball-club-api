import Database from '../../Database.js';

export const getAllMatchesWithPlayers = () => {
  return new Promise(async (resolve, reject) => {
    const sql = `
      SELECT m.id, m.opponent, m.opponentScore, m.teamScore, m.date, u.firstName, u.lastName, u.email, u.role
      FROM matchs m
      LEFT JOIN users_matchs um ON m.id = um.matchId
      LEFT JOIN users u ON u.id = um.userId
      ORDER BY m.id, um.userId
    `;
    Database.db.all(sql, [], function (err, result) {
      if (err) reject(err);

      const matches = {};
      result.forEach((row) => {
        if (!matches[row.id]) {
          matches[row.id] = {
            id: row.id,
            opponent: row.opponent,
            opponentScore: row.opponentScore,
            teamScore: row.teamScore,
            date: row.date,
            players: [],
          };
        }
        if (row.firstName && row.lastName && row.email && row.role) {
          matches[row.id].players.push({
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            role: row.role,
          });
        }
      });

      resolve(Object.values(matches));
    });
  });
};
