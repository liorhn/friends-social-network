import * as mysql from "mysql";

export const initDatabase = () => {
  const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "friends_schema",
  });
  db.connect(function (err: string) {
    if (err) throw err;
    console.log("DB Connected!");
  });

  return db;
};
