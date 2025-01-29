
import express from 'express';

const app = express();
const port = 8080


app.get( '/', (req,res) => {
    console.log( " Express method called ");
})

app.listen( port ,() => {
    console.log( `Server running on the port ${port}`);
})