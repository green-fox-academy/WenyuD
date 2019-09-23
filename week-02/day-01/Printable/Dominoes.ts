'use strict';
import Printable from './Printable';

class Domino implements Printable{
    values: number[];
    constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
    }
  
    toString() {
      return `[${this.values[0]}|${this.values[1]}]`;
    }

    printAllFields() {
        console.log(`${this.values}`)
    }
}

function initializeDominoes() {
    const dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

const dominoes = initializeDominoes();

for (let domino of dominoes) {
    domino.printAllFields();
}