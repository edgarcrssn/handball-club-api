import Database from '../../Database.js';

export const changeRole = (email, role) => {
  return new Promise((resolve, reject) => {
    Database.db.run(
      'UPDATE users SET role = ? WHERE email = ?',
      [role, email],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};
