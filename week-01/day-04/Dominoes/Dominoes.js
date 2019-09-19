'use strict';

const Domino = require('./domino');

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
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

let length = dominoes.length;
for (let i = length - 1; i < length + length -1; i++) {
    let number = dominoes[i].values[1];
    for(let j = 0; j < length - 1; j++) {
        if(dominoes[j].values[0] === number) {
            dominoes.push(dominoes[j])
        }
    }
}
dominoes.splice(0, length-1);

console.log(dominoes.toString());