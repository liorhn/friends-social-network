const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'friends_schema'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/login', (req, res) => {
    res.send('Welcome to Login page!');
})
app.listen(3000, () => {
    console.log('Running on server 3000!');
});
