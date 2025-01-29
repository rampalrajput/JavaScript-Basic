class InvalidException extends Error {

    constructor(msg){
        super(msg);
    }
}
try{
    let age = 12;
 
    if(age < 18){
        throw new InvalidException(" Age is not valid");
    }
    else{
        console.log( " Welcome to vote for goverment id")
    }
} 
   catch(err){
    console.log(err);
   }