import sqlite3 from 'sqlite3';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

class Database {
  constructor() {
    if (!Database.instance) {
      this.db = new sqlite3.Database('src/data/hcc.sqlite');
      this.db.serialize(() => {
        this.db.run(
          'CREATE TABLE IF NOT EXISTS users (\
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          firstName TEXT NOT NULL,\
          lastName TEXT NOT NULL,\
          email TEXT UNIQUE NOT NULL,\
          password TEXT NOT NULL,\
          role TEXT NOT NULL,\
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
        );
        this.db.run(
          '\
          CREATE TABLE IF NOT EXISTS matchs (\
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          opponent TEXT NOT NULL,\
          opponentScore INTEGER,\
          teamScore INTEGER,\
          date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
        );
        this.db.run(
          'CREATE TABLE IF NOT EXISTS users_matchs (\
          userId INTEGER NOT NULL,\
          matchId INTEGER NOT NULL,\
          PRIMARY KEY (userId, matchId),\
          FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,\
          FOREIGN KEY (matchId) REFERENCES matchs(id) ON DELETE CASCADE)'
        );
        this.db.run(
          'CREATE TABLE IF NOT EXISTS articles (\
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          title TEXT UNIQUE NOT NULL,\
          content TEXT NOT NULL,\
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\
          userId INTEGER NOT NULL,\
          FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE)'
        );
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(process.env.ADMIN_PASS, salt);
        this.db.run(
          `INSERT OR IGNORE INTO users VALUES(null, 'Edgar', 'Crasson', 'edgarcrasson@hotmail.com', '${hash}', 'admin', null)`
        );
        this.db.run(
          `INSERT OR IGNORE INTO articles VALUES(null, 'Comment quoicoubeh a changer le monde ?', 'quoicoubeh quoicoubeh quoicoubeh quoicoubeh quoicoubeh', null, 1)`
        );
        this.db.run(
          `INSERT OR IGNORE INTO articles VALUES(null, 'Comment quoicourageu veulent censurer les quoicoubeh ?', 'quoicoubliat quoicoubliat quoicoubliat quoicoubliat quoicoubliat', null, 1)`
        );
        Database.instance = this;
      });
      return Database.instance;
    }
  }
}

export default new Database();
