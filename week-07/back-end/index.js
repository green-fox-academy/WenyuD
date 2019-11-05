require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT;
const db = require('./static/db.js');

const app = express();
app.use(express.json());


app.get('/', async (req, res) => {
    res.statusCode = 200;
    res.write("Welcome!");
    res.end();
});

app.get('/posts', async (req, res) => {
    let sqlString = 'SELECT * FROM posts';
    let queryInput = req.query;
  
    try {
        let data = await db.promisedQuery(sqlString, queryInput);
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/posts', async (req, res) => {
    let sqlString = 'INSERT INTO posts (post_title, post_url) VALUES (?, ?)';
    let queryInput = [req.body.title, req.body.url];

    if (!req.body.title) {
        res.statusCode = 400;
        res.write("Please provide the title!");
        res.end();
    } else if (!req.body.url) {
        res.statusCode = 400;
        res.write("Please provide the url!");
        res.end();
    } else {
        try {
            await db.promisedQuery(sqlString, queryInput);
        
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end('New post added');
        } catch (error) {
            res.status(409).send('Database error at post endpoint');
        }
    }
});

app.put('/posts/:id/upvote', async (req, res) => {
    let id = req.params.id;

    let queryInput = [id];
    let sqlString = 'SELECT * FROM posts WHERE post_id = ?;';
    let data = await db.promisedQuery(sqlString, queryInput);
    if (data.length == 0) {
        res.statusCode = 404;
        res.write("The ID does not exist!");
        res.end();
    } else {
        try {
            let newScore = Number(data[0].post_score) + 1;

            sqlString = 'UPDATE posts SET post_score = ? WHERE post_id = ?;';
            await db.promisedQuery(sqlString, [newScore, queryInput]);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end('Upvote updated');
        } catch (error) {
            res.status(400).send('Database Error');
        }
    }
})

app.put('/posts/:id/downvote', async (req, res) => {
    let id = req.params.id;

    let queryInput = [id];
    let sqlString = 'SELECT * FROM posts WHERE post_id = ?;';
    let data = await db.promisedQuery(sqlString, queryInput);
    if (data.length == 0) {
        res.statusCode = 404;
        res.write("The ID does not exist!");
        res.end();
    } else {
        try {
            let newScore = Number(data[0].post_score) - 1;

            sqlString = 'UPDATE posts SET post_score = ? WHERE post_id = ?;';
            await db.promisedQuery(sqlString, [newScore, queryInput]);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end('Downvote updated');
        } catch (error) {
            res.status(400).send('Database Error');
        }
    }
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});