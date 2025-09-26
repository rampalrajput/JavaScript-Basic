
class MyClass {

    constructor( name , age) {
            this.name = name,
            this.age = age
    }

    getInfo() {

        console.log(`Hello My Name is ${this.name} and age is ${this.age}`)
    }
}

let obj = new MyClass("Rampal", 12);
obj.getInfo();

