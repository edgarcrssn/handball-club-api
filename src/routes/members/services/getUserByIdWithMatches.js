import Database from '../../../Database.js';

export const getUserByIdWithMatches = (userId) => {
  return new Promise(async (resolve, reject) => {
    const sql = `
      SELECT u.id, u.firstName, u.lastName, u.email, u.role, u.createdAt, m.id as matchId, m.opponent, m.opponentScore, m.teamScore, m.date
      FROM users u
      LEFT JOIN users_matches um ON u.id = um.userId
      LEFT JOIN matches m ON um.matchId = m.id
      WHERE u.id = ?
    `;
    Database.db.all(sql, [userId], function (error, result) {
      if (error) reject(error);

      const users = {};
      result.forEach((row) => {
        if (row.matchId !== null) {
          if (!users[row.id]) {
            users[row.id] = {
              id: row.id,
              firstName: row.firstName,
              lastName: row.lastName,
              email: row.email,
              role: row.role,
              createdAt: row.createdAt,
              matches: [],
            };
          }
          users[row.id].matches.push({
            id: row.matchId,
            opponent: row.opponent,
            opponentScore: row.opponentScore,
            teamScore: row.teamScore,
            date: row.date,
          });
        } else if (!users[row.id]) {
          users[row.id] = {
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            email: row.email,
            password: row.password,
            role: row.role,
            createdAt: row.createdAt,
            matches: [],
          };
        }
      });

      resolve(Object.values(users));
    });
  });
};
