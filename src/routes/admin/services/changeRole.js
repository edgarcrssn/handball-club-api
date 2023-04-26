import Database from '../../../Database.js';

export const changeRole = (userId, role) => {
  return new Promise((resolve, reject) => {
    Database.db.run(
      'UPDATE users SET role = ? WHERE id = ?',
      [role, userId],
      function (err) {
        if (err) {
          reject(err);
        } else if (this.changes === 1) {
          resolve();
        } else {
          reject({ code: 404, message: 'QuoicouNot Found' });
        }
      }
    );
  });
};
