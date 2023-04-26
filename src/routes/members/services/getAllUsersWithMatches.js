import Database from '../../../Database.js';

export const getAllUsersWithMatches = () => {
  return new Promise(async (resolve, reject) => {
    const sql = `
      SELECT u.id, u.firstName, u.lastName, u.email, u.role, u.createdAt, m.opponent, m.opponentScore, m.teamScore, m.date
      FROM users u
      LEFT JOIN users_matches um ON u.id = um.userId
      LEFT JOIN matches m ON um.matchId = m.id
      ORDER BY u.id
    `;
    Database.db.all(sql, [], function (err, result) {
      if (err) reject(err);

      const users = {};
      result.forEach((row) => {
        if (!users[row.id]) {
          users[row.id] = {
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            password: row.password,
            role: row.role,
            createdAt: row.createdAt,
          };
        }
        if (
          row.matchId !== null &&
          row.opponent !== null &&
          row.opponentScore !== null &&
          row.teamScore !== null &&
          row.date !== null
        ) {
          if (!users[row.id].matches) {
            users[row.id].matches = [];
          }
          users[row.id].matches.push({
            id: row.matchId,
            opponent: row.opponent,
            opponentScore: row.opponentScore,
            teamScore: row.teamScore,
            date: row.date,
          });
        }
      });

      resolve(Object.values(users));
    });
  });
};
