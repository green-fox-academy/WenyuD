'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

let aj = [3, 4, 5, 6, 7]

//Do it with the built in method
aj.reverse()
console.log(aj)

aj = [3, 4, 5, 6, 7]
//Do it with creating a new temp array and a loop
let temp = []
while (aj.length != false) {
    temp.push(aj.pop())
}
console.log(temp)