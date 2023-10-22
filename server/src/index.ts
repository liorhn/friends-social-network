import * as express from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(express.json());

//Connecting to my database.
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "friends_schema",
});
db.connect(function (err: string) {
  if (err) throw err;
  console.log("Connected!");
});

app.post("/v1/users", (req, res) => {
  const body = req.body;
  const { email, firstName, lastName, password } = body;

  db.query(
    `SELECT id FROM users WHERE email = ? LIMIT 1`,
    [email],
    (error: string, results: any[]) => {
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
        (error: string) => {
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

//Login endpoint.
app.get("/v1/session", (req, res) => {
  res.send("Welcome to Login pagesadasd!");
});

app.listen(4000, () => {
  console.log("Running on server 4000!");
});

// const mysql = require('mysql');
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const JWT = require('jsonwebtoken');

// const app = express();

// const db = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '123456',
//   database: 'paint'
// })

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// app.use(cors());

// app.use(express.json()) // for parsing application/json

// const hashPassword = (password) => {
//   return new Promise(resolve => {
//     const saltRounds = 10;
//     bcrypt.hash(password, saltRounds, function (err, hash) {
//       resolve(hash);
//     });
//   })
// };

// app.post('/register', async (req, res) => {
//   const body = req.body;
//   const { username, email, password } = body;

//   const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
//   db.query(query, [username, email, await hashPassword(password)], (err) => {
//     res.json({ status: true });
//   })
// })

// app.post('/login', (req, res) => {

//   const body = req.body;

//   const { username, password } = body;

//   if (username && password) {

//     const query = `SELECT * FROM users WHERE username = ?`

//     db.query(query, [username], (err, results) => {
//       if (results.length) {
//         bcrypt.compare(password, results[0].password, (err, result) => {
//           if (result) {
//             const token = JWT.sign({ username }, 'LhM97');
//             res.json({token: token});
//           } else {
//             res.json({ status: 'Password or Username is incorrect, please try again' });
//           }
//         })
//       } else {
//         res.json({status: 'Password or Username is valid \ not getting through the Results array'})
//       }

//     })
//   }

// })

// app.get("/", (req, res) => {
//   res.send("<h1>Homepage</h1>")
// });

// app.listen(5000, () => {
//   console.log('Server running on 5000');
// })
