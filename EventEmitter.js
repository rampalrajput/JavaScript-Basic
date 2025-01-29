import express from 'express';
import EventEmitter from 'events'; 


const app = express();
const port = 3000;
const event = new EventEmitter();
let count = 0;

event.on('count', () => {    //event captured    
    count++;
    console.log(" Event occured ",count)
})

 app.get('/', (req,res) =>{
    res.send(" Get Method called ")
    event.emit('count'); // event registred   
})

app.post('/post',(req,res) => {
    res.send(" POST Method called")
    event.emit('count');
})

app.listen(port, () => {
    console.log(`app listing on port ${port}`)
})

    