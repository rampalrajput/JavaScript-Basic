

/// Differenct way to define function in javascript

// regulare function

function Helloworld () {
    let value = 12;
    console.log( " value of  = ", value);
}

Helloworld()

// Function expression 

let func = function () {
    console.log(" function expression");
}

func();

// Arrow function and defined and how to use it 
let annonousfunction = function(){
    console.log(" Annonums function");
}
annonousfunction();

// Arrow function in javascript

const arroFunction = () => {
    console.log( " Arrow function in javascript");
}

arroFunction();


const arrowfunction1 = (x) => x= x *2 ;
console.log(" arrow function 1", arrowfunction1(3));

/// self excuted function

( function (){
    console.log(" Self excuted function");
}) ();

// self excuted function using arrow function 

{ }

let obj = {
id : 1,
text : 'ram'
};

console.log( " object ", obj.id);

for(let i in obj){
     console.log(obj[i]);
}

/// convert string to object and object to string in javascript

const myJSON = JSON.stringify(obj);
console.log( " string ",myJSON);

// pass by value and pass by refernce

let a = 20;
let b = a;

 a =10;
console.log( ' value of a ',a );
console.log( ' value of b ',b );

// pass by reference 

let obj1 = {
    id :2 
}
let obj3 = obj1;

obj1['id'] = 45;

console.log(' objects 1 ',obj1.id);
console.log(' objects  2',obj3.id);

(function(a,b){
console.log(" sum of announmouse number "+(a+b))
})(15,30);

function Arguments(){

    console.log(arguments);
}

Arguments(12, 34 ,434);

/// 
function regularFunction() {
    console.log(this);
  }
  
  const obj45 = {
    method: regularFunction,
  };
  
  // Called as a method of an object
  console.log(obj45.method()); // Logs obj
  
  // Called as a standalone function
  console.log(regularFunction()); // Logs global object or undefined in strict mode
  
