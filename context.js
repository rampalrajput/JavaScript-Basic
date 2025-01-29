
const numbers = [1, 2, 3, 4, 5];

const max = Math.max.apply(null, numbers);

console.log( " maxiumn number ",max)

// call comma seperated values

let person1 = {
    firstName: 'Karan',
    lastName: 'Sharma'
  };
  
  let person2 = {
    firstName: 'Rakesh',
    lastName: 'Verma'
  };
  
  function sayHello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  
  sayHello.call(person1, 'Hello'); // Hello Karan Sharma
  sayHello.call(person2, 'Hello'); // Hello Rakesh Verma

  // apply Aregument as in the form of array

  let person3 = {
    firstName: 'Karan',
    lastName: 'Sharma'
  };
  
  let person4 = {
    firstName: 'Rakesh',
    lastName: 'Verma'
  };
  
  function sayHello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  
  sayHello.apply(person3, ['Hello']); // Hello Karan Sharma
  sayHello.apply(person4, ['Hello']); // Hello Rakesh Verma

  // Bind : 
  // create a new function By using bind(), you can create new functions with pre-defined contexts, 
  //which can then be invoked with the desired arguments.

  let person6 = {
    firstName: 'Karan',
    lastName: 'Sharma'
  };
  
  let person7 = {
    firstName: 'Rakesh',
    lastName: 'Verma'
  };
  
  function sayHello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  
  let sayHelloToPerson1 = sayHello.bind(person6);
  let sayHelloToPerson2 = sayHello.bind(person6);
  
  sayHelloToPerson1('Hello'); // Hello Karan Sharma
  sayHelloToPerson2('Hello'); // Hello Rakesh Verma
