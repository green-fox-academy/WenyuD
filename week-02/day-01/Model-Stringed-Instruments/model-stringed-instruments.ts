'use strict';

abstract class Instrument {
    protected name: string;
    constructor (name: string) {
        this.name = name;
    }
    abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;
    constructor (name: string, numberOfStrings: number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }
    abstract sound(): void;
    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
    }
}

class ElectricGuitar extends StringedInstrument {
    constructor (numberOfStrings: number = 6, name: string = 'Electric Guitar') {
        super(name, numberOfStrings);
    }
    sound() {
        return 'Twang';
    }
}

class BassGuitar extends StringedInstrument {
    constructor (numberOfStrings: number = 4, name: string = 'Bass Guitar') {
        super(name, numberOfStrings);
    }
    sound() {
        return 'Duum-duum-duum';
    }
}

class Violin extends StringedInstrument {
    constructor (numberOfStrings: number = 4, name: string = 'Violin') {
        super(name, numberOfStrings);
    }
    sound() {
        return 'Screech';
    }
}

export {ElectricGuitar, BassGuitar, Violin};