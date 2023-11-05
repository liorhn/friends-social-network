import { Express } from "express";
import { Connection } from "mysql";
import * as crypto from "crypto-js";

//Login

export const initSessionService = (app: Express, db: Connection) => {
  app.post("/v1/session", (req, res) => {
    const body = req.body;
    const { email, password } = body;

    if (email && password) {
      const query = "SELECT * FROM users WHERE email = ?";

      db.query(query, [email], (err, results) => {
        if (results.length) {
          const existHashedPassword = results[0].password;

          const hashPassword = (password: any) => {
            const stringfySalt = results[0].salt;
            const parseSalt = crypto.enc.Hex.parse(stringfySalt);

            const iterations: number = 1000;
            const hashedPassword = crypto
              .PBKDF2(password, parseSalt, {
                keySize: 256 / 32,
                iterations: iterations,
              })
              .toString();

            return hashedPassword;
          };

          const userHashedPassword = hashPassword(password);

          if (existHashedPassword === userHashedPassword) {
            return res.json({
              status: 200,
              message: "Authentication successful",
            });
          } else {
            return res.json({
              status: 401,
              error: "Authentication failed",
              message: "Invalid username or password",
            });
          }
        } else {
          return res.json({
            status: 404,
            message: "Couldn't find the provided email",
          });
        }
      });
    }
  });
};
