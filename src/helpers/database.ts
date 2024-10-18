import { Database } from "bun:sqlite";

const db = new Database("./src/db/db.sqlite");

db.exec(
    `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
      );
    `,
  );

export default db;