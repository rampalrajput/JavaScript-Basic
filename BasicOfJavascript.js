
// 1. Object creation in using {} braces

const obj = {

    id : 12,
    text : 'demo'
}

console.log(obj);

//2. using object() Constractor,

let obj2 = new Object();
obj2.name = "demo"

console.log(obj2)

//3.// usig ES6 classes

class demo {

    constructor( id, college){
        this.id = id,
        this.college = college
    }
    display(){
        console.log( `id = ${this.id} name = ${this.college}`)
    }
}
let obj3 = new demo(2, 'LNCT');

obj3.display();

//4. using Object.assign()

let obj4 =Object.assign ( {}, {text: 'Book', age : 30});

console.log(' My object 4', obj4);