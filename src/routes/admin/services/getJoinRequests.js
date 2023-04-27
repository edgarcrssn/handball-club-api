import Database from '../../../Database.js';

export const getJoinRequests = () => {
  return new Promise((resolve, reject) => {
    Database.db.all(
      'SELECT id, firstName, lastName, email, role, createdAt FROM users WHERE role = "member"',
      (error, users) => {
        if (error) reject(error);
        else resolve(users);
      }
    );
  });
};
