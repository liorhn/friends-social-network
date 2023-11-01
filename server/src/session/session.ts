// import { Express } from "express";
// import { Connection } from "mysql";
// // import * as bcrypt from "bcrypt";

// export const initSessionService = (app: Express, db: Connection) => {
  
//   // const hashPassword = (password) => {
//   //   // return new Promise((resolve) => {
//   //   const saltRounds = 10;
//   //   bcrypt.hash(password, saltRounds, function (err, hash) {
//   //     // resolve(hash);
//   //   });
//   //   // });
//   // };

//   app.post("/v1/session", (req, res) => {
//     // const body = req.body;
//     // const { email, password } = body;
//     const query = "SELECT * FROM users WHERE email = ?";

//     db.query(query, [email], (err, results) => {
//       if (results.length) {
//         console.log("yaaaa");
//       } else {
//         console.log("nope");
//       }
//     });
//   });
// }; 
