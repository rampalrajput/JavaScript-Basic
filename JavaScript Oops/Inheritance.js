
class Parents {

    constructor( name ) {
        this.name = name;
    }

   parentInfo(){
    console.log(`I'm your father ${this.name}`);
   }
}

class Child extends Parents {

    constructor( name, age) {
        super(name),
        this.age = age;
    }

    chileInfo() {
        console.log(`My Son age is ${this.age}`)
    }

}

let childObj = new Child("Rampal", 28);

childObj.parentInfo();
childObj.chileInfo();