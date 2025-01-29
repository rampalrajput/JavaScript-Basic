/// Using Express js

import express from 'express';

const app = express();
const port = 3030;

/// middlware

const middlware = function(req, res, next){
    console.log("middle ware logged");
    next();
}

app.use(middlware);

app.get('/', (req,res) => { 
    
    res.send("Hello World")
});

app.listen(port, () => {
   console.log(` app listing in the port ${port}`)
});

