// Sharpie Set
// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

'use strict';

const Sharpie = require('./sharpie');

class SharpieSet {
    constructor() {
        this.sharpieSet = [];
    }

    addSharpies(newSharpie) {
        this.sharpieSet.push(newSharpie)
    }

    countUsable() {
        let count = 0;
        this.sharpieSet.map( element => {
            if(element.inkAmount > 0) {
                count += 1
            }
        })
        console.log(count);
    }

    removeTrash() {
        this.sharpieSet.map( (element, index) => {
            if(element.inkAmount == 0) {
                this.sharpieSet.splice(index,1)
            }
        })
        console.log(sharpieSet);
    }
}

let sharpieSet = new SharpieSet();
sharpieSet.addSharpies(new Sharpie('white', 10, 99));
sharpieSet.addSharpies(new Sharpie('yellow', 10, 0));
sharpieSet.addSharpies(new Sharpie('black', 10, 19));

sharpieSet.countUsable();
sharpieSet.removeTrash();