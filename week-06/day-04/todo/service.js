const express = require('express');
const app = express();

const url = require('url');

var todoList = {
    "todos": [
      {
        "id": 1,
        "text": "Wake up",
        "done": true
      },
      {
        "id": 2,
        "text": "Do some work",
        "done": false
      }
    ]
}


exports.getTodoList = function (req, res) {
    var response = {
        "Todos": todoList
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.postTodoList = function (req, res) {
    let body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        postBody = JSON.parse(body);

        if (!postBody.text) {
            res.statusCode = 400;
            res.write("Please provide the text!");
            res.end();
        } else {
            if (!postBody.done) {
                postBody.done = false;
            }

            todoList.push(postBody);
    
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(postBody));
        }
    });
};