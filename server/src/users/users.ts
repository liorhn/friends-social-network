import { Express } from "express";
import { Connection } from "mysql";
import * as crypto from "crypto-js";

//Register

export const initUsersService = (app: Express, db: Connection) => {
  app.post("/v1/users", (req, res) => {
    const body = req.body;
    const { email, firstName, lastName, password } = body;

    const hashPassword = (password: any) => {
      const salt: any = crypto.lib.WordArray.random(128 / 8);
      const iterations: number = 1000;
      const hashedPassword = crypto
        .PBKDF2(password, salt, { keySize: 256 / 32, iterations: iterations })
        .toString();

      return [hashedPassword, salt];
    };

    const [hashedPassword, salt] = hashPassword(password);
    const stringfySalt = crypto.enc.Hex.stringify(salt);

    db.query(
      `SELECT id FROM users WHERE email = ? LIMIT 1`,
      [email],
      (error, results: []) => {
        if (error) {
          return res.status(500).json({
            status: 500,
            error: "Failed to check email existence",
          });
        }
        if (results.length > 0) {
          return res.status(409).json({
            status: 409,
            error: "Email already exists",
          });
        }

        const query = `INSERT INTO users (email, first_name, last_name, password, salt) VALUES (?, ?, ?, ?, ?)`;
        db.query(
          query,
          [email, firstName, lastName, hashedPassword, stringfySalt],
          (error) => {
            if (error) {
              return res.status(500).json({
                status: 500,
                error: "Failed to insert data",
              });
            } else {
              return res.status(200).json({
                status: 200,
              });
            }
          }
        );
      }
    );
  });
};
