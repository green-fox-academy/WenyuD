const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Array Handler');
})

app.post('/arrays', (req, res) => {
    let what = req.body.what;
    let numbers = req.body.numbers;

    if (what && numbers) {
        let result = 0;
        if (what === 'sum') {
            numbers.forEach(element => {
                result += element;
            })
            res.json({
                result: result
            })
        } else if (what === 'multiply') {
            result = 1;
            numbers.forEach(element => {
                result *= element;
            })
            res.json({
                result: result
            })
        } else if (what === 'double') {
            result = [];
            numbers.forEach(element => {
                result.push(element*2)
            })
            res.json({
                result: result
            })
        }
    } else {
        res.send({
            error: 'Please provide what to do with the numbers!'
        })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})