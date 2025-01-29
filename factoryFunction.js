/*
In JavaScript, a factory function is a function that creates and returns an object. 
It’s a common design pattern for creating objects with similar structures or functionality without using classes or the new keyword.
Factory functions allow you to encapsulate object creation logic, making it reusable and easy to modify.  */

function createPerson(name, age) {
    return {
      name,
      age,
      greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
    };
  }
  
  // Usage
  const person1 = createPerson('Alice', 25);
  const person2 = createPerson('Bob', 30);
  
  person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
  