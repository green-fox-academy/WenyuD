// Farm
// Reuse your Animal class
const Animal = require ('./animal')

// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Farm {
    constructor(slot) {
        this.animals = [];
        this.slot = slot;
        this.hungry = 100;
        this.index = 0;
    }

    breed() {
        if (this.animals.length < this.slot) {
            this.animals.push(new Animal(Math.random()*100, Math.random()*100))
        }
    }

    slaughter() {
        for (let i = 0; i < this.animals.length; i++) {
            if (this.animals[i].hunger < this.hungry) {
                this.index = i;
                this.hungry = this.animals[i].hunger;
            }
        }
        this.animals.splice(this.index,1)
    }
}

let farm = new Farm(5);
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
farm.breed();
console.log(farm.animals)
farm.slaughter();
console.log(farm.animals)