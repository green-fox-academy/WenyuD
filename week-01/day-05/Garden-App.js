'use strict';

class Plants {
    constructor (color, type, water = 0) {
        this.color = color;
        this.type = type;
        this.water = water;
    }
}

class Flowers extends Plants {
    constructor (color, water) {
        super(color, 'Flower', water);
        this.absorbCoefficient = 0.75;
    }

    getThirst() {
        return this.water < 5 ? this.thirst = true : this.thirst = false;
    }
}

class Trees extends Plants {
    constructor (color, water) {
        super(color, 'Tree', water);
        this.absorbCoefficient = 0.4;
    }
    getThirst() {
        return this.water < 10 ? this.thirst = true : this.thirst = false;
    }
}

class Garden {
    constructor () {
        this.plants = [];
    }

    plantFlower(color) {
        this.color = color;
        this.plants.push(new Flowers(this.color));
    }

    plantTree(color) {
        this.color = color;
        this.plants.push(new Trees(this.color));
    }

    showGarden() {
        this.plants.forEach(element => element.getThirst());
        this.plants.forEach(element => console.log(`The ${element.color} ${element.type} ${element.thirst ? 'needs' : 'doesnt need'} water.`));
        this.needWater = this.plants.filter(element => element.thirst).length;
    }

    water(count) {
        this.count = count;
        this.plants.filter(element => element.thirst).forEach(element => element.water += (this.count/this.needWater)*element.absorbCoefficient);
        console.log(`Watering with ${this.count}`);
    }
}

const garden = new Garden();

garden.plantFlower('yellow');
garden.plantFlower('blue');
garden.plantTree('purple');
garden.plantTree('orange');
garden.showGarden();
console.log('\n');
garden.water(40);
garden.showGarden();
console.log('\n');
garden.water(70);
garden.showGarden();