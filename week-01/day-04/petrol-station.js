// Petrol Station
// Create a Station and a Car classes

// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
class Station {
    constructor (gasAmount) {
        this.gasAmount = gasAmount
    }

    refill(car) {
        this.gasAmount -= car.capacity;
        car.refill();
    }
}

// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100
class Car {
    constructor () {
        this.gasAmount = 0;
        this.capacity = 100;
    }

    refill() {
        this.gasAmount += this.capacity;
    }
}

let station = new Station(200);
let car = new Car();

station.refill(car)
