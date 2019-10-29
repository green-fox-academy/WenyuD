require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const PORT = 3000;

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

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

app.get('/', async (req, res) => {
    let sqlString = 'SELECT book_name FROM book_mast;';
    let queryInput = req.query;
  
    try {
        let data = await promisedQuery(sqlString, queryInput);        
        
        res.render('index', {
            data: data,
            title: "BOOKS"
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/details', async (req, res) => {
    let sqlString = 'SELECT book_name, aut_name, cate_descrip, pub_name, book_price \
        FROM book_mast,author,category, publisher \
        WHERE book_mast.aut_id = author.aut_id AND book_mast.cate_id = category.cate_id AND book_mast.pub_id = publisher.pub_id';
    let queryInput = req.query;
    
    sqlString = await filter(queryInput, sqlString);
  
    try {
        let data = await promisedQuery(sqlString, queryInput);
        
        res.render('details', {
            data: data,
            title: "BOOKS DETAILS"
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

async function filter(queryInput, sqlString) {
    if (Object.keys(queryInput).length > 0) {
        for (let key in queryInput) {
            if (key === 'category') {
                sqlString += ` AND category.cate_descrip='${queryInput[key]}'`;
            } else if (key === 'publisher') {
                sqlString += ` AND publisher.pub_name='${queryInput[key]}'`;
            } else if (key === 'plt') {
                sqlString += ` AND book_mast.book_price<'${queryInput[key]}'`;
            } else if (key === 'pgt') {
                sqlString += ` AND book_mast.book_price>'${queryInput[key]}'`;
            }
        }
    }
    return sqlString += ';';
}

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});