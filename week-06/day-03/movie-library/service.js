const url = require('url');

var movies = [
    {
      "id": 12,
      "title": "Forrest Gump",
      "genre": "drama"
    },
    {
      "id": 23,
      "title": "Mission Impossible 18",
      "genre": "action"
    },
  ];

exports.getMovieList = function (req, res) {
    var response = {
        "movies": movies
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.postMovie = function (req, res) {
    if (req.headers.authorization == 'top-secret') {
        let body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            postBody = JSON.parse(body);

            let duplicated = false;
            movies.forEach(element => {
                if (element.title == postBody.title) {
                    duplicated = true;
                }
            })

            if (!postBody.title) {
                res.statusCode = 400;
                res.write("Please provide the title!");
                res.end();
            } else if (duplicated == true) {
                res.statusCode = 409;
                res.write("This movie is already in the list!");
                res.end();
            } else {
                if (!postBody.genre) {
                    postBody.genre = 'unknown';
                }

                movies.push(postBody);
        
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(postBody));
            }
        });
    }
};

exports.getMovieByGenre = function (req, res) {
    const reqUrl = url.parse(req.url, true);

    const genre = reqUrl.query.genre;
    const result = [];

    movies.forEach(element => {
        if (element.genre === genre) {
            result.push(element);
        }
    })

    if (!result[0]) {
        res.statusCode = 404;
        res.write("This genre does not exist!");
        res.end(JSON.stringify(response));
    } else {
        var response = {
            "filteredMovies": result
        };

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));    
    }
}

exports.getMovieById = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    

    const id = reqUrl.pathname.split('/')[2];
    const result = [];

    movies.forEach(element => {
        if (element.id.toString() === id) {
            result.push(element);
        }
    })

    if (!result[0]) {
        res.statusCode = 404;
        res.write("This ID does not exist!");
        res.end();
    } else {
        var response = {
            "filteredMovies": result
        };
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    }
}

exports.deleteMovieById = function (req, res) {
    if (req.headers.authorization == 'top-secret') {
        const reqUrl = url.parse(req.url, true);
        const id = reqUrl.pathname.split('/')[2];

        let result = [];
        movies.forEach(element => {
            if (element.id.toString() === id) {
                result.push(element);
            }
        })

        if (result[0]) {
            movies = movies.filter(element => {
                return element.id != id;
            })
            res.statusCode = 204;
            res.end();
        } else {
            res.statusCode = 404;
            res.write("This ID does not exist!");
            res.end();
        }
    } else {
        res.statusCode = 403;
        res.write("Need Authorization!");
        res.end();
    }
}

exports.updateMovieById = function (req, res) {
    if (req.headers.authorization == 'top-secret') {
        const reqUrl = url.parse(req.url, true);

        const id = reqUrl.pathname.split('/')[2];
        let result = [];

        let body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            postBody = JSON.parse(body);

            movies.forEach(element => {
                if (element.id == postBody.id) {
                    result.push(element);
                    element.title = postBody.title;
                    element.genre = postBody.genre;
                }
            })

            console.log(result);

            if (!result[0]) {
                res.statusCode = 404;
                res.write("This ID does not exist!");
                res.end();
            } else if (!postBody.id || !postBody.title || !postBody.genre || postBody.id != id) {
                res.statusCode = 400;
                res.write("Please provide the id, the title, and the genere!");
                res.end();
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(postBody));
            }
        });
    } else {
        res.statusCode = 403;
        res.write("Need Authorization!");
        res.end();
    }
}