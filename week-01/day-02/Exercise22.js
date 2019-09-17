'use strict';

// - Create a variable named `af` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `af` to the console*
// *hint: use a loop, console.log(af) won't cut it
// - bonus for using the correct built in array method

let af = [4, 5, 6, 7]

//first method
for (let i = 0; i < af.length; i++) {
    console.log(af[i])
}

//second method(build in array method)
while (af.length > 0) {
    console.log(af.shift())
}