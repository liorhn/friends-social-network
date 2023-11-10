import { Express } from "express"; // Express is Type
import { Connection } from "mysql"; // Connection is Type
import * as crypto from "crypto-js";
import * as JWT from "jsonwebtoken";


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
          const id = results[0].id;

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
            const token = JWT.sign({ email, id }, "LH97");
            return res.cookie("token", token, { httpOnly: true }).json({    
              status: 200,
              message: "Authentication successful",
            });   
          } else {
            return res.status(401).json({
              status: 401,
              error: "Authentication failed",
              errorMessage: "Invalid username or password",
            });
          }
        } else {
          return res.status(404).json({
            status: 404,
            message: "Couldn't find the provided email",
          });
        }
      });
    }
  });
};
