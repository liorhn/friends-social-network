import { Express } from "express";
import { Connection } from 'mysql';

export const initUsersService = (app: Express, db: Connection) => {
  app.post("/v1/users", (req, res) => {
    const body = req.body;
    const { email, firstName, lastName, password } = body;

    db.query(
      `SELECT id FROM users WHERE email = ? LIMIT 1`,
      [email],
      (error, results: []) => {
        if (error) {
          return res.json({
            status: false,
            error: "Failed to check email existence",
          });
        }
        if (results.length > 0) {
          return res.json({
            status: false,
            error: "Email already exists",
          });
        }

        const query = `INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)`;
        db.query(
          query,
          [email, firstName, lastName, password],
          (error) => {
            if (error) {
              console.error("Error inserting data:", error);
              res.json({ status: false, error: "Failed to insert data" });
            } else {
              res.json({ status: true });
            }
          }
        );
      }
    );
  });
};
