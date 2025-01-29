
let zero = new Number(12);

zero[2] = 100;
console.log(zero[1]);

if(zero){
 console.log(zero)
}
else{
console.log("ELSE")

}


///// what is the prototype in javascript

const user = { 'age': 30}
user.age = 25
console.log(user.age);

console.log('👦' ==='👦')

///
var value = 890
console.log(value);

//// iterator function 

let generatorFunction = (function*() {
    yield 1;
    yield 2;
    yield 3;
})()


//generatorFunction();

for(let value of generatorFunction){
    console.log( "vhg",value);
}
//for(let value of generatorFunction){
    console.log(value);
//}

 /*function* myGenFunc(){
    yield 1;
    yield 2;
    yield 3;
}

var myGenObj = new myGenFunc;
console.log(myGenFunc.next().value);
*/
//
/*const obj = { 'key' : 'value'}
const array = [...obj];
console.log(array);
*/
///

function myfun (x =10 , y=90){
  console.log('jjkgk',x*y)
}

myfun(1,56);

const [x, ...y]= [1,2,3,4];
console.log('values',x,y);


async function func() {
    return 10;   
}
console.log(func()) //


