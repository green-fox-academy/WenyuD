'use strict';

const lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let triangle = `*`

for (let i = 0; i < lineCount; i++) {
    console.log(triangle)
    triangle += `*`
}