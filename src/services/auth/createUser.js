import Database from '../../Database.js';
import * as bcrypt from 'bcrypt';

export const createUser = async ({ firstName, lastName, email, password }) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return new Promise((resolve, reject) => {
    Database.db.run(
      'INSERT INTO users VALUES (null, $firstName, $lastName, $email, $password, $role, null)',
      {
        $firstName: firstName,
        $lastName: lastName,
        $email: email,
        $password: hash,
        $role: 'member',
      },
      (err, user) => {
        if (err) {
          reject(err);
        } else {
          resolve(user);
        }
      }
    );
  });
};
