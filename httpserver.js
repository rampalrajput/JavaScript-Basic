import http from 'http';

const port = 8080;

const server = http.createServer(
    console.log( " https server created")
).listen(port, err =>(
    console.log(" https server listing on port", port)
))