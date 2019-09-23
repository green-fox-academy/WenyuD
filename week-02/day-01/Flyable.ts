// 'use strict';
import {Animal} from './Animals-In-The-Zoo/animal';

interface Flyable {
    land(): void;
    fly(): void;
    takeOff(): void;
}

abstract class Vehicle {
    year: number;
    make: string;
    model: string;

    constructor(year: number, make: string, model: string) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
}

class Helicopter extends Vehicle implements Flyable {
    constructor(year: number, make: string, model: string) {
        super(year, make, model);
    }

    land() {
        console.log(`${this.constructor.name} lands.`)
    }

    fly() {
        console.log(`${this.constructor.name} flys.`)
    }

    takeOff() {
        console.log(`${this.constructor.name} takes off.`)
    }
}

class Bird extends Animal implements Flyable{
    constructor(name: string) {
        super(name);
    }

    getName() {
        return this.name;
    }

    breed() {
        return 'laying eggs';
    }

    land() {
        console.log(`${this.constructor.name} lands.`)
    }

    fly() {
        console.log(`${this.constructor.name} flys.`)
    }

    takeOff() {
        console.log(`${this.constructor.name} takes off.`)
    }

}

let helicopter = new Helicopter(2013, 'Volkswagen', 'Passat');
let eagle = new Bird('Eagle');
helicopter.land();
eagle.land();
