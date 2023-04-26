import Database from './Database.js';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

Database.db.serialize(() => {
  // Insert admin user
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(process.env.ADMIN_PASS, salt);
  Database.db.run(
    `INSERT OR IGNORE INTO users(firstName, lastName, email, password, role) VALUES('Edgar', 'Crasson', 'edgarcrasson@hotmail.com', '${hash}', 'admin')`
  );

  // Insert some matches
  Database.db.run(
    `INSERT OR IGNORE INTO matches(opponent, opponentScore, teamScore) VALUES('Apagnan', 3, 13)`
  );

  // Insert some users_matches
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(1, 1)`);

  // Insert some articles
  Database.db.run(
    `INSERT OR IGNORE INTO articles(title, content, userId) VALUES('Comment quoicoubeh a changé le monde ?', 'quoicoubeh quoicoubeh quoicoubeh quoicoubeh quoicoubeh', 1)`
  );
  Database.db.run(
    `INSERT OR IGNORE INTO articles(title, content, userId) VALUES('Comment les quoicourageux veulent censurer les quoicoubeh ?', 'quoicoubliat quoicoubliat quoicoubliat quoicoubliat quoicoubliat', 1)`
  );

  console.log(
    "T'as les cramptés ? 🧐 A pagnan ! 🥹 Quoicoubeh, quoicoubeh, quoicoubeh..! 😳"
  );
});
