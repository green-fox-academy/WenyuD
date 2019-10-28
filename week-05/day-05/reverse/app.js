const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

const randomWords = [
    'Arrgh.',
    'Uhmm.',
    'Err..err..',
    'Ughhh.'
]

app.use(express.json());

app.get('/sith', (req, res) => {

})

function reverse(text) {
    let textArray = text.split(" ");
    
}