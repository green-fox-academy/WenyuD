'use strict';

abstract class Animal {
    name: string;
    age: number;
    gender: string;
    color: string;
    foodType: string;

    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }

    abstract getName(): void;

    abstract breed(): void;
}

class Mammal extends Animal {
    constructor(name: string) {
        super(name);
    }

    getName() {
        return this.name;
    }

    breed() {
        return 'pushing miniature versions out';
    }
}

class Reptile extends Animal {
    constructor(name: string) {
        super(name);
    }

    getName() {
        return this.name;
    }

    breed() {
        return 'laying eggs';
    }
}

class Bird extends Animal {
    constructor(name: string) {
        super(name);
    }

    getName() {
        return this.name;
    }

    breed() {
        return 'laying eggs';
    }
}

export {Animal,Reptile, Mammal, Bird};