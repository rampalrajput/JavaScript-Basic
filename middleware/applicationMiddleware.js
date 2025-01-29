
import express from 'express';

const app = express();
//const router = express.Router();
const port =3030;

const ApplicationMiddleware = function (res, req ,next){

    if(req.id > 10){
        console.log(" middleware resolved")
    }
    else{
        console.log(" middleware rejected")
    }
    console.log("Middleware logged");
    next();
}
const test = app.use(ApplicationMiddleware);

app.get,((req,res) => {
    req.id = 12;
    res.send("Hello World")
})

app.listen( port, () => console.log(` app server running on port ${port}`))

//-------------------------Router level middleware


