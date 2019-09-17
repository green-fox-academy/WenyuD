'use strict';

// - Create a variable named `abc` with the following content: `['Arthur', 'Boe', 'Chloe']`
// - Swap the first and the third element of `abc`

let abc = ['Arthur', 'Boe', 'Chloe']
let first = abc.shift()
let third = abc.pop()
abc.push(first)
abc.unshift(third)
console.log(abc)