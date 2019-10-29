let mysql = require('mysql');
let myexpress = require('express');

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'jaj',
  password: 'alma',
  database: 'myDBname',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.end();

conn.query('SELECT * FROM table_name;', function(err, rows) {
  console.log('Data received from Db:\n');
  console.log(rows);
});

conn.query('SELECT * FROM table_name;', function(err, rows) {
  if (err) {
    console.log(err.toString());
  }

  console.log('Data received from Db:\n');
  console.log(rows);
});

let app = myexpress();

app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});