const mysql = require('mysql');

const connection = mysql.createConnection({

    host:'localhost',
    port: '3306',
    user: 'root',
    database: 'student',
    password: 'test1234'
    
})

connection.connect( function( err){
    
    if(err){
        console.log( " Database Connection error"+err);
    }
    else{
        console.log(" Database connected successfully");
        connection.query(" select * from company", function(err, result) {
             if (err){
                console.log( " error occured"); throw err;
             }
             else{
                console.log(" Results  ", result);
             }
         });
    }
})