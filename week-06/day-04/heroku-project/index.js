const express = require('express');
const app = express();
const PORT = process.env.PORT;

let count = 0;

app.get('/', (req, res) => {
    res.write('works!')
    res.end();
})

app.get('/greeting', (req, res) => {
    let name = req.query.name;
    count++;

    var response = {
        "greetCount": count,
        "content": `Hello, ${name}!`
    }
    res.end(JSON.stringify(response));
    
})

app.listen(PORT, () => {})

// This app is running on https://ghoulish-cat-69604.herokuapp.com/