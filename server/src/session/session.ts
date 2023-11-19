import { Express } from "express"; // Express is Type
import { Connection } from "mysql"; // Connection is Type
import * as crypto from "crypto-js";
import * as JWT from "jsonwebtoken";
import {
  TokenSignBody,
  tokenSecretKey,
} from "../middleware/authenticationMiddleware";

//Login

export const initSessionService = (app: Express, db: Connection) => {
  app.post("/v1/session", (req, res) => {
    const body = req.body;
    const { email, password } = body;

    if (!email || !password) {
      res.status(400);
      return;
    }
    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], (err, results) => {
      if (!results.length) {
        return res.status(404).json({
          message: "Couldn't find the provided email",
        });
      }
      const existHashedPassword = results[0].password;
      const id = results[0].id;

      const hashPassword = (password: string) => {
        const stringfiedSalt = results[0].salt;
        const parsedSalt = crypto.enc.Hex.parse(stringfiedSalt);

        const iterations: number = 1000;
        const hashedPassword = crypto
          .PBKDF2(password, parsedSalt, {
            keySize: 256 / 32,
            iterations: iterations,
          })
          .toString();

        return hashedPassword;
      };

      const userHashedPassword = hashPassword(password);

      if (existHashedPassword === userHashedPassword) { // todo: timing safe attack
        const signBody: TokenSignBody = { id };
        const token = JWT.sign(signBody, tokenSecretKey);
        return res.cookie("token", token, { httpOnly: true }).json({
          status: 200,
          message: "Authentication successful",
        });
      } else {
        return res.status(401).json({
          error: "Authentication failed",
          errorMessage: "Invalid username or password",
        });
      }
    });
  });
};
