const http = require('http');
const url = require('url');


module.exports = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  // console.log(reqUrl);
  
  var service = require('./service.js');
  if(req.method == 'GET' && reqUrl.query.genre == null && reqUrl.pathname == '/movies') {
    service.getMovieList(req, res);
  }
  else if (req.method == 'GET' && reqUrl.query.genre != null && reqUrl.pathname == '/movies') {
    service.getMovieByGenre(req, res);
  } 
  else if (req.method == 'POST' && reqUrl.pathname == '/movies') {
    if (req.headers.authorization == 'top-secret') {
      service.postMovie(req, res);
    } else {
        res.statusCode = 403;
        res.write("Need Authorization!");
        res.end();
    }
  }
  else if (req.method == 'PUT' && reqUrl.pathname == '/movies') {
    res.statusCode = 405;
    res.write("You should update information on a specific movie!");
    res.end();
  }
  else if (req.method == 'GET' && reqUrl.pathname.length > 7) {
    service.getMovieById(req, res);
  }
  else if (req.method == 'DELETE' && reqUrl.pathname.length > 7) {
    service.deleteMovieById(req, res);
  }
  else if (req.method == 'PUT' && reqUrl.pathname.length > 7) {
    service.updateMovieById(req, res);
    console.log('yes'); 
  }

});