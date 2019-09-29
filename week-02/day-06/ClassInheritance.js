var garden = require('./Class');

function Playground(width, length) {
    garden.call(this, width, length);
    this.toys = [];
}

Playground.prototype = Object.create(garden.prototype);
Playground.prototype.constructor = Playground;
Playground.prototype.add = function(toy) {
    this.toys.push(toy);
}

var p = new Playground(2,3);
p.add('tghn');
console.log(p.toys);

console.log(p instanceof Playground);