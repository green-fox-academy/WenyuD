const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');


app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doubling', (req, res) => {
    let inputNumber = req.query.input;
    if (inputNumber) {
        res.json({
            received: inputNumber,
            result: inputNumber*2
        })
    } else {
        res.send({
            error: 'Please provide an input!'
        })
    }
})

app.get('/greeter', (req, res) => {
    let nameString = req.query.name;
    let titleString = req.query.title;

    if(!nameString && !titleString) {
        res.send({
            error: 'Please provide a name and a title!'
        })
    } else if (!nameString) {
        res.send({
            error: 'Please provide a name!'
        })
    } else if (!titleString) {
        res.send({
            error: 'Please provide a title!'
        })
    } else {
        res.json({
            welcome_message: `Oh, hi there ${nameString}, my dear ${titleString}!`
        })
    }
})

app.get('/appenda/:a', (req, res) => {
    let a = req.params.a;
    if(a) {
        res.json({
            appended: `${a} + a`
        })
    } else {
        res.status(404);
    }
})

app.post('/dountil/:action', (req, res) => {
    let number = req.body.until;
    let actionString = req.params.action;
    
    if(number) {
        let result = 0;
        let i = 1;
        if (actionString === 'sum') {
            while (i <= number) {
                result += i;
                i++;
            }
        } else if (actionString === 'factor') {
            result = 1;
            while (i <= number) {
                result *= i;
                i++;
            }
        }
        console.log(number, result, actionString);
        res.json({
            result: result
        })
    } else {
        res.send({
            error: 'Please provide a number!'
        })
    }
})

app.post('/dountil/:action', (req, res) => {
    let num = req.body.until;
    let action = req.params.action;
    console.log(num, action);

    if (num) {
        let result = 0;
        if (action === 'sum') {
            for (let i = 1; i <= num; i++) {
                result += i;
            }
        } else {
            result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;
            }
        }
        res.json({
            result: result
        })
    } else {
        res.json({
            error: "Please provide a number!"
        })
    }

})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})