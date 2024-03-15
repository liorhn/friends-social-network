import * as mysql from "mysql";

export const initDatabase = () => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "friends",
  });
  db.connect(function (err: string) {
    if (err) throw err;
    console.log("DB Connected!");
  });

  return db;
};  
