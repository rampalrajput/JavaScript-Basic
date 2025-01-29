
// callback function

function great(callback){

    setTimeout(() => {
         callback()
    },1000) 
    console.log(" Hello world");
}

function result(){
    console.log( " I am your callback function ")
}

great(result);

// promise functions

const mypromise = new Promise( (resolve, reject) => {
    const number = 5;
   if(number === 5){
       resolve(" operations completed ")
   }
   else{
      reject( new error("operation failed "))
   }
});

mypromise
.then(result => {
    console.log( " result", result);
})
.catch(error => {
  console.log( " Error", error);
});