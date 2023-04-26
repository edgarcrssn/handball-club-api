import Database from '../../../Database.js';

export const changeRole = (email, role) => {
  return new Promise((resolve, reject) => {
    Database.db.run(
      'UPDATE users SET role = ? WHERE email = ?',
      [role, email],
      function (err) {
        if (err) {
          reject(err);
        } else if (this.changes === 1) {
          resolve();
        } else {
          reject({ code: 404, message: 'no user found with this email' });
        }
      }
    );
  });
};
