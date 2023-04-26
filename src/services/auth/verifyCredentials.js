import Database from '../../Database.js';
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const verifyCredentials = (email, password) => {
  return new Promise(async (resolve, reject) => {
    Database.db.get(
      'SELECT id, email, password, role FROM users WHERE email = $email',
      {
        $email: email,
      },
      async (err, user) => {
        if (err) {
          reject(err);
        } else {
          if (!user?.email) {
            reject({ code: 404 });
          } else {
            const isPasswordValid = await bcrypt.compare(
              password,
              user.password
            );
            if (!isPasswordValid) {
              reject({ code: 401 });
            } else {
              const secret = process.env.SECRET;
              const expiresIn = '1h';
              const payload = {
                id: user.id,
                email: user.email,
                role: user.role,
              };
              const token = jwt.sign(payload, secret, { expiresIn });
              resolve({ token });
            }
          }
        }
      }
    );
  });
};
