const express = require('express');

const app = express();
const port = 3000;


const middleware = ( req, res, next) => {
   console.log( " I am middleware logged in")
   next();
}

app.use(middleware);

app.get( '/', (req, res) => {
    console.log( " MY Middleware Application")
});

app.listen(port , () => {
    console.log( `Node js application listing in the port ${port} `)
});
