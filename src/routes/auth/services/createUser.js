import Database from '../../../Database.js';
import * as bcrypt from 'bcrypt';

export const createUser = async ({ firstName, lastName, email, password }) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return new Promise((resolve, reject) => {
    Database.db.run(
      'INSERT INTO users(firstName, lastName, email, password) VALUES (?, ?, ?, ?)',
      [firstName, lastName, email, hash],
      (error) => {
        if (error) reject(error);
        else resolve();
      }
    );
  });
};
