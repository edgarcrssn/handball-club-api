import Database from '../../../Database.js';

export const getJoinRequests = () => {
  return new Promise((resolve, reject) => {
    Database.db.all(
      'SELECT id, firstName, lastName, email, role, createdAt FROM users WHERE role = "member"',
      (err, users) => {
        if (err) reject(err);
        else resolve(users);
      }
    );
  });
};
