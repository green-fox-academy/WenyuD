const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  // console.log(reqUrl);
  
  var service = require('./service.js');
  if(req.method == 'GET' && reqUrl.pathname == '/api/todos') {
    service.getTodoList(req, res);
  }
  else if (req.method == 'POST' && reqUrl.pathname == '/api/todos') {
      service.postTodoList(req, res);
  }

});