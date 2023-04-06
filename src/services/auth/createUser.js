import Database from '../../Database.js';
import * as bcrypt from 'bcrypt';

export const createUser = async ({
  firstName,
  lastName,
  email,
  password,
  role,
}) => {
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
        $role: role,
      },
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({
            id: this.lastID,
            firstName,
            lastName,
            email,
            hash,
            role,
          });
        }
      }
    );
  });
};
