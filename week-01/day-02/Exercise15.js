'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(parameter) {
    let sums = 0
    for (let i = 0; i < parameter; i++) {
        sums += i
    }
    return console.log(sums)
}

sum(5)