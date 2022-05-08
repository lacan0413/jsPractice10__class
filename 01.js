class Vehicle {
    constructor(_wheels) {
        this.numWheels = _wheels;
    }
    get wheels() {
        return this.numWheels;
    }
    set wheels(_wheels) {
        this.numWheels = _wheels;
    }
    static accelerate() {
        console.log("go faster");
    }
    static decelerate() {
        console.log("go slower");
    }
}

let car = new Vehicle(4);
let car1 = new Vehicle(2);
let car2 = new Vehicle(6);

car.wheels = 7;
console.log(car.wheels);

Vehicle.accelerate();