import Database from '../../../Database.js';

export const getMatchByIdWithPlayers = (matchId) => {
  return new Promise(async (resolve, reject) => {
    const sql = `
      SELECT m.id, m.opponent, m.opponentScore, m.teamScore, m.date, u.firstName, u.lastName, u.email, u.role
      FROM matches m
      LEFT JOIN users_matches um ON m.id = um.matchId
      LEFT JOIN users u ON u.id = um.userId
      WHERE m.id = ?
    `;
    Database.db.all(sql, [matchId], function (err, result) {
      if (err) return reject(err);
      if (!result[0] || !result[0].id) return reject({ code: 404 });

      const match = {
        id: result[0].id,
        opponent: result[0].opponent,
        opponentScore: result[0].opponentScore,
        teamScore: result[0].teamScore,
        date: result[0].date,
        players: [],
      };

      result.forEach((row) => {
        if (row.firstName && row.lastName && row.email && row.role) {
          match.players.push({
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            role: row.role,
          });
        }
      });

      resolve(match);
    });
  });
};
