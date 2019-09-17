'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(number) {
    let factorial = 1
    for (let i = number; i > 0; i--) {
        factorial *= i
    }
    return factorial
}

console.log(factorio(6))