

//Higher order function

function multiPly( factor){
    return function(number){
        return factor * number;
    }
}

const result = multiPly(8);

console.log(' Higher order function', result(10));

// callback function
function greet(name, callback){
    callback();
    console.log( " Hello callback function",name);
    
}
function greatTouser(){
    console.log(" callback function called");
}
greet("javascript",greatTouser);

