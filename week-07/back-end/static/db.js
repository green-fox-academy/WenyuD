const mysql = require('mysql');

const connect = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

let promisedQuery = (sqlString, queryInput) =>
  new Promise((resolve, reject) => {
    connect.query(sqlString, queryInput, (error, result) => {
      if (error) {
        reject(error);
      }      
      resolve(result);
    });
});

module.exports = {
    promisedQuery
}