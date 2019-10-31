const express = require('express');
const app = express();
const PORT = 8080;

let count = 0;

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