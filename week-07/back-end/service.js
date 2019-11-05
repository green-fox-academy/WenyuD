const url = require('url');
let idCounter = 0;

var posts = [
        {
        "id": 25,
        "title": "Dear JavaScript",
        "url": "http://9gag.com",
        "timestamp": 1494339525,
        "score": 791,
        "owner": null,
        "vote": 1,
        "comments": 3
        },
        {
        "id": 74,
        "title": "Crockford",
        "url": "http://9gag.com",
        "timestamp": 1494138425,
        "score": 567,
        "owner": "kristof4",
        "vote": -1,
        "comments": 2
        }
]

exports.getPosts = function (req, res) {
    var response = {
        "posts": posts
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.postPosts = function (req, res) {
    if (req.headers.authorization == 'top-secret') {
        let body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            postBody = JSON.parse(body);

            if (!postBody.title) {
                res.statusCode = 400;
                res.write("Please provide the title!");
                res.end();
            } else if (!postBody.url) {
                res.statusCode = 400;
                res.write("Please provide the url!");
                res.end();
            } else {
                postBody.timestamp = Date.now();
                postBody.score = 0;

                posts.push(postBody);

                idCounter++;
                //need to clarificate id isn't duplicated
        
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