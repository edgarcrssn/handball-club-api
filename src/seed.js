import Database from './Database.js';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

Database.db.serialize(() => {
  // Insert admin user
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(process.env.ADMIN_PASS, salt);
  Database.db.run(
    `INSERT OR IGNORE INTO users(firstName, lastName, email, password, role) VALUES('admin', 'admin', 'admin@admin.com', '${hash}', 'admin')`
  );

  // Insert some users
  Database.db.run(
    `INSERT OR IGNORE INTO users(firstName, lastName, email, password, role) VALUES('contributor', 'contributor', 'contributor@contributor.com', '${bcrypt.hashSync(
      'contributor',
      bcrypt.genSaltSync(10)
    )}', 'contributor')`
  );
  Database.db.run(
    `INSERT OR IGNORE INTO users(firstName, lastName, email, password, role) VALUES('coach', 'coach', 'coach@coach.com', '${bcrypt.hashSync(
      'coach',
      bcrypt.genSaltSync(10)
    )}', 'coach')`
  );
  Database.db.run(
    `INSERT OR IGNORE INTO users(firstName, lastName, email, password, role) VALUES('player', 'player', 'player@player.com', '${bcrypt.hashSync(
      'player',
      bcrypt.genSaltSync(10)
    )}', 'player')`
  );
  Database.db.run(
    `INSERT OR IGNORE INTO users(firstName, lastName, email, password, role) VALUES('member', 'member', 'member@member.com', '${bcrypt.hashSync(
      'member',
      bcrypt.genSaltSync(10)
    )}', 'member')`
  );

  // Insert some matches
  Database.db.run(
    `INSERT OR IGNORE INTO matches(opponent, opponentScore, teamScore) VALUES('Apagnan', 3, 13)`
  );
  Database.db.run(
    `INSERT OR IGNORE INTO matches(opponent, opponentScore, teamScore) VALUES('Cramptés', 23, 25)`
  );
  Database.db.run(
    `INSERT OR IGNORE INTO matches(opponent, opponentScore, teamScore) VALUES('Quoicoubeh', 0, 3)`
  );

  // Insert some users_matches
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(1, 1)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(1, 2)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(1, 3)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(2, 1)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(2, 3)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(3, 2)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(3, 3)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(4, 3)`);
  Database.db.run(`INSERT OR IGNORE INTO users_matches VALUES(5, 1)`);

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
