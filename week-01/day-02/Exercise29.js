'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

//This parameter can be changed
const size = 4

for (let i = 0; i < size; i++) {
    let list = ``
    for (let j = 0; j < size; j++) {
        if(j === size - 1 - i) {
            list = list.concat(`1`)
        } else {
            list = list.concat(`0`)
        }
    }
    console.log(list)
}