
class Vehical {

    start() {
        console.log(' Engine Started');
    }
}

class Car extends Vehical {

    start() {
        console.log(" Car Engine Started");
    }
}

class Bike extends Vehical {
    start () {
        console.log(" Bike Engine Started" );
    }
}

function VehicalController ( vehical ) {

    vehical.start();
}

const mycar = new Car();
const mybike = new Bike();

VehicalController(mycar);
VehicalController(mybike);
