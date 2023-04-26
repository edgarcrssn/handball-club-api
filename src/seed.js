import Database from './Database.js';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

Database.db.serialize(() => {
  // Insert admin user
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(process.env.ADMIN_PASS, salt);
  Database.db.run(
    `INSERT OR IGNORE INTO users VALUES(1, 'Edgar', 'Crasson', 'edgarcrasson@hotmail.com', '${hash}', 'admin', null)`
  );

  // Insert some matchs
  Database.db.run(
    `INSERT OR IGNORE INTO matchs VALUES(1, 'Apagnan', 3, 13, null)`
  );

  // Insert some users_matchs
  Database.db.run(`INSERT OR IGNORE INTO users_matchs VALUES(1, 1)`);

  // Insert some articles
  Database.db.run(
    `INSERT OR IGNORE INTO articles VALUES(1, 'Comment quoicoubeh a changé le monde ?', 'quoicoubeh quoicoubeh quoicoubeh quoicoubeh quoicoubeh', null, 1)`
  );
  Database.db.run(
    `INSERT OR IGNORE INTO articles VALUES(2, 'Comment les quoicourageux veulent censurer les quoicoubeh ?', 'quoicoubliat quoicoubliat quoicoubliat quoicoubliat quoicoubliat', null, 1)`
  );

  console.log(
    "T'as les cramptés ? 🧐 A pagnan ! 🥹 Quoicoubeh, quoicoubeh, quoicoubeh..! 😳"
  );
});
