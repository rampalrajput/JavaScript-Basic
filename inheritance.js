
class A {
   
    greet(){
     return ` this is class function `;
   }
}

class B extends A {
    
    text() {
        console.log(" this is class B function");
    }
   
}

let c = new B();

console.log(c.greet());


// inheritance in javascript

let obj ={
    id: 12,
    text:"javascript"
}

let obj1 ={
 
    city : "Bhopal",
    
}

obj1.__proto__ = obj;

console.log(obj1.text);


/// Propotypes in javascript and properties

let a = {
id: 12
}

let b ={
text : "New javascript"
}

console.log(" ",a.prototype);


/// propotypes of javascript

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

const dog = new Animal("Buddy");

console.log(dog.name);
dog.speak();




