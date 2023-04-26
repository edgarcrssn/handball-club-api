import sqlite3 from 'sqlite3';

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
          CREATE TABLE IF NOT EXISTS matches (\
          id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
          opponent TEXT NOT NULL,\
          opponentScore INTEGER,\
          teamScore INTEGER,\
          date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)'
        );
        this.db.run(
          'CREATE TABLE IF NOT EXISTS users_matches (\
          userId INTEGER NOT NULL,\
          matchId INTEGER NOT NULL,\
          PRIMARY KEY (userId, matchId),\
          FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,\
          FOREIGN KEY (matchId) REFERENCES matches(id) ON DELETE CASCADE)'
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
        Database.instance = this;
      });
      return Database.instance;
    }
  }
}

export default new Database();
