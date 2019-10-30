const port = 3000;

const server = require('./controller.js');

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});