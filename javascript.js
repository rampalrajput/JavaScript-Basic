


class Square{

    constructor(length){
           this.length = length
    }
    get area(){
         return this.length * this.length;
    }
    set area(value){
        return this.area = value;
    }
}
const square = new Square(10);
console.log(square.area);